export * from './components';

export type {
  Suggestion, Part, MentionSuggestionsProps, PartType,
  MentionInputProps,
} from './types';

export {
  mentionRegEx, isMentionPartType, getMentionValue, parseValue, replaceMentionValues,
} from './utils';
