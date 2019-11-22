import React from "react";
import { connect } from "react-redux";
import { getComicHeroData } from "./actions";

const HeroData = props => {
  return(
    <>
      <button
        onClick={() => {
          props.getComicHeroData();
        }}
      >
        Get Random Hero/Villian!
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        <>
          <div>hero name: {props.hero.name} </div>
          <div>{props.hero.strength}</div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    hero: state.hero
  };
};

export default connect (
  mapStateToProps,
  { getComicHeroData }
)(HeroData); 
