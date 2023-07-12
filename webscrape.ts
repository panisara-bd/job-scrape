import puppeteer from 'puppeteer';

const linkOne = "https://www.linkedin.com/jobs/view/3585315359/";
const linkTwo = "https://www.linkedin.com/jobs/view/3616100586/";

const scrape = async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 926 });
    await page.goto(linkOne);

    const data = await page.evaluate(() => {
      
        const titleElement = document.querySelector("h1");
        const title = titleElement.innerText;
        
        const aboutTheJobElement = document.querySelector(".jobs-description-content__text span");
        // const aboutTheJob = aboutTheJobElement.innerHTML;

        return {
            title,
            aboutTheJob: '',  
        } 
    })

    console.log(data);
    
    
    await browser.close();

}

scrape();