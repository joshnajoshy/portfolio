function ProjectList () {
return (
    <div className="projectCard">
        <h4 className= "ncnewstitle">NC News</h4>
    <div className="projectsContent">
        <div className="textContent">
    <p>NC News is a dynamic, user-interactive news platform that displays a curated list of articles. Users can easily browse content and filter articles by most recent, most voted, or topic.</p>
    <p>Key features include:</p>
        <li>Article Filtering: Sort articles by date, votes, or topic category.</li>
        <li>Voting System: Like or dislike articles to reflect user opinions and influence rankings.</li>
        <li>Commenting Functionality: Post and delete comments for deeper engagement with articles.</li>
        <li>Responsive Design: The app adopts a mobile-first approach, ensuring a seamless experience across all devices.</li>
        <br></br>
        <a href="https://github.com/joshnajoshy/nc_news_api" target="_blank" className='link'><h6>Backend Tech Stack:</h6></a>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>PSQL</li>
            <li>Jest</li>
            <br></br>
            <a href="https://github.com/joshnajoshy/nc-news" target="_blank" className='link'><h6>Frontend Tech Stack:</h6></a>
            <li>React</li>
            <li>Vite</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <br></br>
            <h6>Authentication & Hosting:</h6>
            <li>Supabase</li>
            <li>Render</li>
        </div>
        <img className="projectImage" src="../src/assets/NC-NEWS.png"/>
    </div>
    </div>
)
}

export default ProjectList;