import React from 'react';
import List from './List'

function App(props) {
  const allCards = props.store.allCards;

  const lists = props.store.lists.map( list => 
    <List 
      key={list.id} 
      header={list.header} 
      cards={list.cardIds.map( cardId =>
        allCards[cardId])}
    >
    </List>
  )

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {lists}
      </div>
    </main>
  );
}

export default App;
