import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';
import { Counter } from './components/counter/counter';
import { AppProviders } from './providers/providers';
import { MuiMode } from './components/mui/muiMode';

function App() {
	return (
		<AppProviders>
			<div className="App">
				{/* <Application />
				<Skills skills={['HTML', 'CSS']} /> */}
				{/* <Counter /> */}
				{/* <CounterTwo count={1} />
				<Users />
				 */}
				<MuiMode />
			</div>
		</AppProviders>
	)
}

export default App;
