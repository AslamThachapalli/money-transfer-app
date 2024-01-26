const z = require('zod');

const transferBody = z.object({
    to: z.string(),
    amount: z.number(),
})

module.exports = transferBody;