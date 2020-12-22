import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {	
	state = {
		isLoading: true,
		repoList: [],
		fetchFailure: false
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'antoninamaximova'
		}).then(({data}) => {
			this.setState({
			repoList: data,
			isLoading: false
			});
		}).catch(() => {
			this.setState({
				isLoading: false,
				isError: true,
				Texting: 'Ошибка запроса к серверу либо пользователь не найден.'
			})
		})

		octokit.users.getByUsername({
			username: 'antoninamaximova'
		}).then(({data}) => {
			this.setState({
			user: data,
			isLoading: false
			});
		})
	}

	render() {
		const { isLoading, repoList, isError, Texting, user } = this.state;
		return (<div>
					{ isLoading ? <CircularProgress /> : <div>
						{isError ? <div>{Texting}</div> : <div><h1>Обо мне</h1>
							<img src={user.avatar_url}></img>
							<ul>
								<li  className={styles.list}>Имя пользователя: {user.login};</li>
								<li  className={styles.list}>Информация: {user.bio};</li>
					 		</ul>
					 <h2>Мои репозитории:</h2>
					 <div>
					 	{!isLoading && <div><ol>
							{repoList.map(repo => 
									(<li key={repo.id} src={repo.url}> <a href={repo.html_url}> {repo.name }</a></li>))
							} 
					 	</ol>
					 	</div>}
					 	</div>
					 	</div>}
					 </div>}
				</div>)
	}
}


export default About;