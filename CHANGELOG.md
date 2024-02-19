# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 2.2.5 (2024-02-19)


### ⚠ BREAKING CHANGES

* add ability for defined pattern list custom style - #13
* `renderSuggestions`, `trigger`, `isInsertSpaceAfterMention`, `mentionTextStyle` is now moved to `mentionTypes` property. 'Mentions' component now renamed to 'MentionInput'. `mentionRegEx` changed a little big.

### Features

* add ability for defined pattern list custom style - [#13](https://github.com/dabakovich/react-native-controlled-mentions/issues/13) ([ef5c83f](https://github.com/dabakovich/react-native-controlled-mentions/commit/ef5c83ff9c683f52d42093bf93253ed2ac48dfb1))
* add ability to render mention suggestions at the bottom of input ([b3fd17a](https://github.com/dabakovich/react-native-controlled-mentions/commit/b3fd17a5a9128ab8635f2896cfc8aea0a4574d5c)), closes [#27](https://github.com/dabakovich/react-native-controlled-mentions/issues/27)
* add isInsertSpaceAfterMention property ([2ef3f04](https://github.com/dabakovich/react-native-controlled-mentions/commit/2ef3f04427c7bdcd494fd787827f9827ef2a1a0c))
* add mentionTextStyle property ([a88963c](https://github.com/dabakovich/react-native-controlled-mentions/commit/a88963c3769e1ab65796584b734a3ac53877ff5b)), closes [#9](https://github.com/dabakovich/react-native-controlled-mentions/issues/9)
* add multiple mention type support [#9](https://github.com/dabakovich/react-native-controlled-mentions/issues/9) ([6a0d0cc](https://github.com/dabakovich/react-native-controlled-mentions/commit/6a0d0ccf725c1fe8517fe005633c56075504c245))
* allow mention part type keywords with spaces ([0ea6cf5](https://github.com/dabakovich/react-native-controlled-mentions/commit/0ea6cf58cdb4f42b1f8a9ae33b4e282a688db3f1)), closes [#25](https://github.com/dabakovich/react-native-controlled-mentions/issues/25)
* enchanted mention regex to accept word characters and "-" ([b372ed7](https://github.com/dabakovich/react-native-controlled-mentions/commit/b372ed7fde21ac5e18546c7eddd49ca916799493)), closes [#9](https://github.com/dabakovich/react-native-controlled-mentions/issues/9)
* update readme, add demo ([4e493f2](https://github.com/dabakovich/react-native-controlled-mentions/commit/4e493f232a84f86b986d5c3d746996219982fa81)), closes [#4](https://github.com/dabakovich/react-native-controlled-mentions/issues/4)


### Bug Fixes

* '@' triggers on email enter ([a3c41ec](https://github.com/dabakovich/react-native-controlled-mentions/commit/a3c41eca2be77d052bcc32971084ebee0331d189)), closes [#41](https://github.com/dabakovich/react-native-controlled-mentions/issues/41)
* add functional ref support for 'inputRef' prop ([7cea64d](https://github.com/dabakovich/react-native-controlled-mentions/commit/7cea64db14a865fe25564d311ee51f8c727a1f75))
* add functional ref support for 'inputRef' prop ([c19dcaa](https://github.com/dabakovich/react-native-controlled-mentions/commit/c19dcaa8a480580d5fdd5af80221577b08c9987e)), closes [#11](https://github.com/dabakovich/react-native-controlled-mentions/issues/11)
* add functional ref support for 'inputRef' prop ([bee0304](https://github.com/dabakovich/react-native-controlled-mentions/commit/bee03044f71074d396f4310f9a9de054d0d406ad))
* add missed exports ([3d9623d](https://github.com/dabakovich/react-native-controlled-mentions/commit/3d9623daf57663ccac1e28d89108779b229d4b08)), closes [#42](https://github.com/dabakovich/react-native-controlled-mentions/issues/42)
* add onSelectionChange forwarding ([c310995](https://github.com/dabakovich/react-native-controlled-mentions/commit/c3109950d9e5cccd04619e18298ab3a58511404e)), closes [#8](https://github.com/dabakovich/react-native-controlled-mentions/issues/8)
* bug with adding mention on new line ([3a1bede](https://github.com/dabakovich/react-native-controlled-mentions/commit/3a1bede6a577fa84ab03c6f532da3a24f5815593)), closes [#10](https://github.com/dabakovich/react-native-controlled-mentions/issues/10)
* error when value is null ([640edec](https://github.com/dabakovich/react-native-controlled-mentions/commit/640edec5a191e944c3534c43316f9ef67579d300)), closes [#36](https://github.com/dabakovich/react-native-controlled-mentions/issues/36) [#39](https://github.com/dabakovich/react-native-controlled-mentions/issues/39)
* error when value is null ([6d5f02c](https://github.com/dabakovich/react-native-controlled-mentions/commit/6d5f02c40c82be5deea945b6b9c13f50c8b18ea9)), closes [#36](https://github.com/dabakovich/react-native-controlled-mentions/issues/36)
* id with special characters parsing ([99ef471](https://github.com/dabakovich/react-native-controlled-mentions/commit/99ef4714a8baec125d322f888470ce0ff13bd0f6)), closes [#21](https://github.com/dabakovich/react-native-controlled-mentions/issues/21)
* importing parseValue helper ([805e336](https://github.com/dabakovich/react-native-controlled-mentions/commit/805e336209c5d5fb3a8c6d411fe1fd847b3d61ad)), closes [#34](https://github.com/dabakovich/react-native-controlled-mentions/issues/34)
* mention keyword triggering after mention select ([5554517](https://github.com/dabakovich/react-native-controlled-mentions/commit/555451795d756caec0d5496621cbaf8114774e92)), closes [#25](https://github.com/dabakovich/react-native-controlled-mentions/issues/25) [/github.com/dabakovich/react-native-controlled-mentions/issues/25#issuecomment-781796624](https://github.com/dabakovich//github.com/dabakovich/react-native-controlled-mentions/issues/25/issues/issuecomment-781796624)
* mention regex for multiple mentions ([53ed261](https://github.com/dabakovich/react-native-controlled-mentions/commit/53ed261388927eac05264e88f4770c2533fecf88)), closes [#2](https://github.com/dabakovich/react-native-controlled-mentions/issues/2)
* onSubmitEditing property ([04fc46d](https://github.com/dabakovich/react-native-controlled-mentions/commit/04fc46db1bdaebb54af7dddf31ba8110d8683127)), closes [#35](https://github.com/dabakovich/react-native-controlled-mentions/issues/35)
* phantom crash on clearing input ([3777c60](https://github.com/dabakovich/react-native-controlled-mentions/commit/3777c6082dc0737d4f3e67638b0cf29eb4b8986a)), closes [#14](https://github.com/dabakovich/react-native-controlled-mentions/issues/14)
* remove named capture groups ([db42b31](https://github.com/dabakovich/react-native-controlled-mentions/commit/db42b312f030c144acffdd378cf15cfd8675fcdc)), closes [#23](https://github.com/dabakovich/react-native-controlled-mentions/issues/23) [#37](https://github.com/dabakovich/react-native-controlled-mentions/issues/37)
* value parsing with "(" and ")" ([d443de2](https://github.com/dabakovich/react-native-controlled-mentions/commit/d443de285b01b7145a62956cde4fb1d786165211)), closes [#24](https://github.com/dabakovich/react-native-controlled-mentions/issues/24)
* wrong behavior on adding ")" after a mention ([89a8ee3](https://github.com/dabakovich/react-native-controlled-mentions/commit/89a8ee33bae94bf4cd9efc4232d354bf0db2e1e5)), closes [#24](https://github.com/dabakovich/react-native-controlled-mentions/issues/24)
* wrong editing with keyboard auto-correction ([a3c2630](https://github.com/dabakovich/react-native-controlled-mentions/commit/a3c26300e841f192bcfc46e8f7eecb47e0d2713c)), closes [#1](https://github.com/dabakovich/react-native-controlled-mentions/issues/1)
* wrong replaceMentionValues working ([b4ffea9](https://github.com/dabakovich/react-native-controlled-mentions/commit/b4ffea946273b46ee776c3b4941fe6f61d89d84a))

# Changelog

## [v1.0.0](https://github.com/dabakovich/react-native-controlled-mentions/tree/v1.0.0) (2020-12-29)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v1.0.0-0...v1.0.0)

**Implemented enhancements:**

- Suggestions- [\#9](https://github.com/dabakovich/react-native-controlled-mentions/issues/9)

## [v1.0.0-0](https://github.com/dabakovich/react-native-controlled-mentions/tree/v1.0.0-0) (2020-12-25)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.8...v1.0.0-0)

**Implemented enhancements:**

- Input editing is not stable with keyboard auto-correction [\#1](https://github.com/dabakovich/react-native-controlled-mentions/issues/1)

**Merged pull requests:**

- fix: wrong editing with keyboard auto-correction [\#12](https://github.com/dabakovich/react-native-controlled-mentions/pull/12) ([dabakovich](https://github.com/dabakovich))

## [v0.1.8](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.8) (2020-12-22)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.7...v0.1.8)

**Fixed bugs:**

- inputRef undefined for Mentions [\#11](https://github.com/dabakovich/react-native-controlled-mentions/issues/11)

## [v0.1.7](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.7) (2020-12-20)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.6...v0.1.7)

**Fixed bugs:**

- Suggestions list don't appears when adding a mention on the new line [\#10](https://github.com/dabakovich/react-native-controlled-mentions/issues/10)

## [v0.1.6](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.6) (2020-12-18)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.5...v0.1.6)

**Fixed bugs:**

- onSelectionChange prop not working [\#8](https://github.com/dabakovich/react-native-controlled-mentions/issues/8)

## [v0.1.5](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.5) (2020-12-17)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.4...v0.1.5)

**Implemented enhancements:**

- Add isInsertSpaceAfterMention parameter [\#5](https://github.com/dabakovich/react-native-controlled-mentions/issues/5)

## [v0.1.4](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.4) (2020-12-17)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.3...v0.1.4)

**Closed issues:**

- Add screenshots/gifs to the README [\#4](https://github.com/dabakovich/react-native-controlled-mentions/issues/4)

**Merged pull requests:**

- Update readme, add demo gif [\#6](https://github.com/dabakovich/react-native-controlled-mentions/pull/6) ([dabakovich](https://github.com/dabakovich))

## [v0.1.3](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.3) (2020-12-16)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.2...v0.1.3)

**Fixed bugs:**

- Wrong regex parsing when we have two mentions with some word between them [\#2](https://github.com/dabakovich/react-native-controlled-mentions/issues/2)
- fix: mention regex for multiple mentions [\#3](https://github.com/dabakovich/react-native-controlled-mentions/pull/3) ([dabakovich](https://github.com/dabakovich))

## [v0.1.2](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.2) (2020-12-15)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.1...v0.1.2)

## [v0.1.1](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.1) (2020-12-15)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.1.0...v0.1.1)

## [v0.1.0](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.1.0) (2020-12-09)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.0.22...v0.1.0)

## [v0.0.22](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.0.22) (2020-12-07)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.0.21...v0.0.22)

## [v0.0.21](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.0.21) (2020-11-26)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.0.20...v0.0.21)

## [v0.0.20](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.0.20) (2020-11-26)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/v0.0.19...v0.0.20)

## [v0.0.19](https://github.com/dabakovich/react-native-controlled-mentions/tree/v0.0.19) (2020-11-26)

[Full Changelog](https://github.com/dabakovich/react-native-controlled-mentions/compare/8bbc30b464149609504efbb3c6b242c1317f9e39...v0.0.19)



\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
