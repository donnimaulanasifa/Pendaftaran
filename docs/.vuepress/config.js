const readPkgUp = require('read-pkg-up');

const pkgjson = (readPkgUp.sync()).pkg;

module.exports = {
	title: pkgjson.title,
	description: pkgjson.description,
	base: '/Pendaftaran/',
	themeConfig: {
		search: true,
		navbar: true,
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Github',
				link: 'GITHUB_REPO_LINK'
			},
		],
		sidebar: [
			['/', 'Tabe of contents']
		], // Assumes GitHub. Can also be a full GitLab url.
		repo: '<REPO_URL>',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',
		// if your docs are in a different repo from your main project:
		docsRepo: '<DOCS_REPO_URL>',
		// if your docs are not at the root of the repo:
		docsDir: 'docs',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: '<DOCS_BRACH>',
	}
};