const request = require('supertest')
const app = require('../app')

describe('homepage',() =>{
	it('Welcomes the user',() => {
		return request(app).get('/').then(response => {
			expect(response.text).toMatch(/Welcome/);
		})
	})

})