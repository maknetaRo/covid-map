import styled from 'styled-components';

export const SectionTitle = styled.h3`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ArticleTitle = styled.h4`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  margin-top: 0;
`;

export const LargeNums = styled.p`
   font-family: 'Noto Sans JP', sans-serif;
   font-size: 1.7rem;
   margin-top: 0;
   padding: 0.25rem 0 0.5rem;
   margin-bottom: 0;
   @media (max-width: 989px) {
     font-size: 1.35rem;
   }

   @media (max-width: 699px) {
    font-size: 1.25rem;
   }
`;

export const Subtitle = styled.h5`
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
  color: #5f6368;
  padding-left: 0.5rem;
`;

export const SubtitleGrid = styled(Subtitle)`
 padding-left: .5rem;
 @media (max-width: 699px) {
   padding-left: 0;
 }
`;
