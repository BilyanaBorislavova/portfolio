import './portfolio-card.scss';

import React from 'react';

interface PortfolioCardProps {
    img: string,
    title: string,
    techStack: Array<string>,
    siteType: string,
    description: string,
    url: string,
}

const PortfolioCard = ({ img, title, techStack, siteType, description, url }: PortfolioCardProps) => (
    <section className="portfolio-card">
        <img src="http://findmatthew.com/style/../img/thumb-1.jpg" alt={title} className="portfolio-card-img" />
        <article className="portfolio-card-content">
            <h3 className="portfolio-card-content-title">
                {title}
            </h3>
            <span className="portfolio-card-content-tech-stack">
                {techStack}
            </span>
            <button className="btn btn-secondary portfolio-card-content-learn-more">
                Learn more
            </button>
        </article>
    </section>
);

export default PortfolioCard;
