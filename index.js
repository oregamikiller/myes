/**
 * Created by oregami on 2018/2/27.
 */
const HCCrawler = require('headless-chrome-crawler');

HCCrawler.launch({
    maxConcurrency: 1,
    evaluatePage: (() => ({
        title: $('title').text(),
    })),
    onSuccess: (result => {
        console.log(result)
        console.log(`Requested ${result.options.url}.`);
}),
})
.then(crawler => {
    crawler.queue({ url: 'https://psnine.com/', priority: 1 }); // First queue will be requested first regardless of priority// This queue is requested before the previous queue
crawler.onIdle()
    .then(() => {
    crawler.close()});
});