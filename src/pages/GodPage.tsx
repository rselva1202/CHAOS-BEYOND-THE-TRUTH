import DetailShell, { StoryBlock } from '../components/DetailShell';
import { NotFound } from './EraPage';
import { DEITIES } from '../data/deities';

/** Full-page article for one deity (#/god/:id). */
export default function GodPage({ id }: { id: string }) {
  const deity = DEITIES.find((d) => d.id === id);

  if (!deity) {
    return <NotFound label="This god does not answer." />;
  }

  return (
    <DetailShell
      eyebrow="Pantheon of Gods"
      title={deity.name}
      tagline={deity.epithet}
      span={deity.span}
      plate={deity.plate}
      glyph={deity.glyph}
      hieroglyph={deity.hieroglyph}
      image={deity.image}
      facts={[
        { label: 'Primary Cult Center', items: [deity.cultCenter], glyph: '𓊖' },
        { label: 'Sacred Symbols', items: deity.symbols, glyph: '𓋹' },
      ]}
    >
      {deity.sections.map((section) => (
        <StoryBlock key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
      ))}
    </DetailShell>
  );
}
