import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Markdown from 'react-markdown';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  Breakpoint,
  BreakpointGrid,
  MediaQueries,
  WithWidth
} from './demos';
import breakpointsTable from './demos/breakpoint.md';

function Responsive() {
  const title = brand.name + ' - Layout';
  const description = brand.desc;
  const docSrc = 'containers/Layouts/demos/';
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="Media Queries" icon="ion-ios-phone-portrait" desc="CSS media queries is the idiomatic approach to make your UI responsive.. We provide some CSS-in-JS helpers to do so. In the following demo, we change the background color (red, blue & green) based on the screen width.">
        <div>
          <MediaQueries />
          <SourceReader componentName={docSrc + 'MediaQueries.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="With Width" icon="ion-ios-phone-landscape" desc="Sometimes, using CSS isn't enough. You might want to change the React rendering tree based on the breakpoint value, in JavaScript. We provide a withWidth() higher-order component for this use case. In the following demo, we change the rendered DOM element (em, u, del & span) based on the screen width.">
        <div>
          <WithWidth />
          <SourceReader componentName={docSrc + 'WIthWIdth.js'} />
        </div>
      </PapperBlock>
      <PapperBlock overflowX title="Hidden" icon="ion-ios-eye-outline" desc="Hidden works with a range of breakpoints e.g. xsUp or mdDown, or one or more breakpoints e.g. only='sm' or only={['md', 'xl']}. Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints.">
        <div>
          <Markdown source={breakpointsTable} />
          <Breakpoint />
          <SourceReader componentName={docSrc + 'Breakpoint.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Integration with Grid" icon="ion-ios-grid" desc="It is quite common to alter Grid at different responsive breakpoints, and in many cases, you want to hide some of those elements.">
        <div>
          <BreakpointGrid />
          <SourceReader componentName={docSrc + 'BreakpointGrid.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default Responsive;
