import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setNewPokemon } from "../state/actions/actions";
import { getPokemonById, hasPokemonById } from "../state/selectors/selectors";
import "./PokemonCard.css";

const PokemonCard = ({ currentPokemon, pokedexId, setNewPokemon }) => {
  const [currentPokedexId, setCurrentPokedexId] = useState(0);
  useEffect(() => {
    if (pokedexId > 0 && pokedexId !== currentPokedexId) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexId}/`)
        .then((res) => res.json())
        .then(
          (result) => {
            setCurrentPokedexId(pokedexId);
            setNewPokemon({
              id: pokedexId,
              height: result.height,
              weight: result.weight,
              image: result.sprites.front_default,
              name: result.name,
              experience: result.base_experience,
            });
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [currentPokedexId, pokedexId, setNewPokemon]);

  console.log();
  return (
    <div className="Pokemon-Card" key={pokedexId}>
      {currentPokemon && currentPokemon.id}
    </div>
  );
};

PokemonCard.propTypes = {
  pokedexId: PropTypes.number,
  setNewPokemon: PropTypes.func,
  currentPokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  }),
};

PokemonCard.defaultProps = {
  currentPokemon: null,
  pokedexId: 0,
  setNewPokemon: () => {},
};

// eslint-disable-next-line react-redux/mapDispatchToProps-returns-object
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setNewPokemon,
    },
    dispatch
  );
};
const mapStateToProps = (state, ownProps) => {
  const currentPokemon = hasPokemonById(ownProps.pokedexId, state)
    ? getPokemonById(ownProps.pokedexId, state)
    : null;
  return { currentPokemon };
};

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
