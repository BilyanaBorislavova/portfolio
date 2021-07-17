import React from 'react';
import { ROUTE_IDs } from '../../constants/constants';
import SectionWrapper from '../common/section-wrapper';
import PortfolioCard from './portfolio-card';

const { PORTFOLIO } = ROUTE_IDs;

const Portfolio = () => (
    <SectionWrapper id={PORTFOLIO} className="portfolio" title="Projects">
        <PortfolioCard img="" title="Test" techStack={['123', '123']} siteType="platform" description="1" url="1" />
    </SectionWrapper>
);

export default Portfolio;
