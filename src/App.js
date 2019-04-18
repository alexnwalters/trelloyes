import React from 'react';
import List from './List';
import './App.css';

class AppClass extends React.Component { 
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map( list => 
            <List 
              key={list.id} 
              header={list.header} 
              cards={list.cardIds.map( cardId =>
              store.allCards[cardId])}
            >
            </List>)}
        </div>
      </main>
    );
  }
}

export default AppClass;
