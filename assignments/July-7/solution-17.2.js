/*
 * Modify the method to return fullUrl, protocol and host part separately
 * */

const parseProtocol = url => {
    const URL_REGEX = /^([a-z]+):\/\/([^\/]+)\/(.*)$/, parsedUrl = URL_REGEX.exec(url);
    if (!parsedUrl) return false;
    let [fullUrl, protocol, host] = parsedUrl;
    return [fullUrl, protocol, host];
};

console.log(parseProtocol('https://sytamatik.com/en-US/Web/Home'));


