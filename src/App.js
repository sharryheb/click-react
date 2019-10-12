import React, { Component } from "react";
import Header from "./components/Header";
import Score from "./components/Score";
import StateCard from "./components/StateCard";
import allStates from "./states.json";

class App extends Component
{
    state = {
        inGameStates: [],
        key: "",
        image: "",
        clicked: false,
        points: 0,
        lastPoints: 0,
        message: ""
    }

    getGameImages = () =>
    {
        let inGameStates = [];
        for (let i=0; i<9; i++)
        {
            var index = Math.round(Math.random() * 50);
            if (inGameStates.indexOf(allStates[index]) >= 0)
                --i;
            else
                inGameStates.push(allStates[index]);
        }
        return inGameStates;
    }

    makeGuess = (index, wasAlreadyClicked) =>
    {
        if (wasAlreadyClicked)
        {
            const inGameStates = this.getGameImages();
            let lastPoints = this.state.points;
            this.setState({
                inGameStates: inGameStates,
                message: "You lost! Please play again. ",
                points: 0,
                lastPoints: lastPoints
            });
        }
        else
        {
            const inGameStates = this.state.inGameStates;
            inGameStates[index].clicked = true;
            this.shuffleCards(inGameStates);
            this.setState({
                inGameStates: inGameStates,
                points: this.state.points+1,
                message: ""});
        }
    }

    shuffleCards = (array) =>
    {
        for (let i = array.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    componentDidMount()
    {
        this.setState({ inGameStates: this.getGameImages() });
    }

    render()
    {
        return (
            <div className="container">
                <Header />
                <Score
                    points={this.state.points}
                    lastPoints={this.state.lastPoints}
                    message={this.state.message} />
                <div className="row">
                    {
                        this.state.inGameStates.map((usstate, index) =>
                        (
                            <StateCard
                                key={index}
                                image={`/images/${usstate.name}-basic.png`}
                                onClick={() => this.makeGuess(index, usstate.clicked)}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
