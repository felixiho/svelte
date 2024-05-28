<script lang="ts">
	import type { UserResultType } from './types';

	export let user: UserResultType;
</script>

<div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden container">
	<div class="bg-black p-4">
		<div class="flex items-center">
			<img class="w-20 h-20 rounded-full mr-4" src={user.avatar_url} alt="Avatar" />
			<div>
				<h1 class="text-xl font-bold text-white">{user.name}</h1>
				<p class="text-gray-400">@{user.login}</p>
				<p class="text-gray-400">{user.bio}</p>
			</div>
		</div>
	</div>
	<div class="p-4 bg-white">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div>
				<h2>Location</h2>
				<p>{user.location}</p>
			</div>
			<div>
				<h2>Company</h2>
				<p>{user.company}</p>
			</div>
			<div>
				<h2>Followers</h2>
				<p>{user.followers}</p>
			</div>
			<div>
				<h2>Following</h2>
				<p>{user.following}</p>
			</div>
			<div>
				<h2>Public Repos</h2>
				<p>{user.public_repos}</p>
			</div>
			<div>
				<h2>Public Gists</h2>
				<p>{user.public_gists}</p>
			</div>
			<div>
				<h2>Hireable</h2>
				<p>{user.hireable ? 'Yes' : 'No'}</p>
			</div>
			<div>
				<h2>Twitter</h2>
				<p>@{user.twitter_username}</p>
			</div>
		</div>
		<div class="mt-4">
			<h2 class="text-gray-700 font-semibold">Links</h2>
			<ul class="list-disc list-inside">
				<li><a href={user.html_url} class="text-blue-500">GitHub Profile</a></li>
				<li><a href={user.events_url} class="text-blue-500">Events</a></li>
				<li><a href={user.followers_url} class="text-blue-500">Followers</a></li>
				<li><a href={user.following_url} class="text-blue-500">Following</a></li>
				<li><a href={user.gists_url} class="text-blue-500">Gists</a></li>
				<li><a href={user.organizations_url} class="text-blue-500">Organizations</a></li>
				<li><a href={user.received_events_url} class="text-blue-500">Received Events</a></li>
				<li><a href={user.repos_url} class="text-blue-500">Repositories</a></li>
				<li><a href={user.starred_url} class="text-blue-500">Starred Repos</a></li>
				<li><a href={user.subscriptions_url} class="text-blue-500">Subscriptions</a></li>
			</ul>
		</div>
	</div>
</div>
 
