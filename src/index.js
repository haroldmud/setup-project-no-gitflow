import _, { remove } from 'lodash';
// import printMe from './print.js';
import './style.css';

document.body.innerHTML = `<main><h1>Leaderboard</h1>
<section class="contain"><div class="recentBock"><div class="recentScore">
<h2 class="recentHead">Recent Score</h2>
<button class="recentBtn">Refresh</button></div>
<div class="names"><p>name:100</p>
<p class="grey">name:20</p><p>name:50</p><p class="grey">name:20</p>
<p>name:78</p><p class="grey">name:125</p><p>name:77</p>
<p class="grey">name:42</p></div></div>
<div class="AddScore"><h2>Add you score</h2>
<input id="Input" type="text" placeholder="Your name">
<input id="Input" type="text" placeholder="Your score">
<input type="submit" value="submit" class="submit"></div></section>
</main>`;
