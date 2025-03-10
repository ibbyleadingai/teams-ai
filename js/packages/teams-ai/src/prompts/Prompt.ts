/**
 * @module teams-ai
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { PromptSection } from './PromptSection';
import { LayoutEngine } from './LayoutEngine';

/**
 * Top level prompt section.
 * @remarks
 * Prompts are compositional such that they can be nested to create complex prompt hierarchies.
 */
export class Prompt extends LayoutEngine {
    /**
     * Creates a new 'Prompt' instance.
     * @param sections Sections to render.
     * @param tokens Optional. Sizing strategy for this section. Defaults to `auto`.
     * @param required Optional. Indicates if this section is required. Defaults to `true`.
     * @param separator Optional. Separator to use between sections when rendering as text. Defaults to `\n\n`.
     */
    public constructor(
        sections: PromptSection[],
        tokens: number = -1,
        required: boolean = true,
        separator: string = '\n\n'
    ) {
        super(sections, tokens, required, separator);
    }
}
