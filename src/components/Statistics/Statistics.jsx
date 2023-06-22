import PropTypes from 'prop-types';
import { StatSection, Title } from './Statistics.styled';


export function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
