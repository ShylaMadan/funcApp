module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');
    
    // Read query parameter or get name from the request body
    const name = req.query.name || (req.body && req.body.name);

    // Send response
    context.res = {
        status: 200,
        body: name ? "Hello " + name : "Hello World"
    };
};
