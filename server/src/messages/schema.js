module.exports = {
    body: {
        type: 'object',
        required: ['message'],
        properties: {
          message: { 
              type: 'string',
              minLength: 1,
            }
        }
      }
};