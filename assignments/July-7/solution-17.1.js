/*
 * Write a parseProtocol(url) which takes url as parameter and returns the protocol
 * */

const parseProtocol = url => {
    const URL_REGEX = /^([a-z]+):\/\/([^\/]+)\/(.*)$/, parsedUrl = URL_REGEX.exec(url);
    if (!parsedUrl) return false;
    let [, protocol] = parsedUrl;
    return protocol;
};

console.log(parseProtocol('https://sytamatik.com/en-US/Web/Home'));


