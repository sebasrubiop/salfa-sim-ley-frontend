function bindEvent(element, eventName, eventHandler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, eventHandler);
  }
}

bindEvent(window, 'message', function (e) {
  console.log('recibe mensaje desde Angular:', e.data)
  sendMessage(e.data)
})



function sendMessage(message) {
  Module.ccall('sendMessage', 'null', ['string'], [message]);
}
