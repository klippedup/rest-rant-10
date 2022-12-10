const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
        <main>
            <h1>Home</h1>
            <div>
                <img src="/images/3drinks.jpg" alt="3 drinks" />
            </div>
            <div>
            Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <a href="/places">
        <button className="btn-primary">Places Page</button>
            </a>
            </main>
        </Def>
    )
}

module.exports = home
