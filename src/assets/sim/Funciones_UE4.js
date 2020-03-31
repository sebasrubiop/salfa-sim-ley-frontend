
function sendMessage(message)
{
    Module.ccall('sendMessage', 'null', ['string'], [message]);
}