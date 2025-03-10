/**
 * @module teams-ai
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { TurnContext } from 'botbuilder';
import { Tokenizer } from '../tokenizers';
import { PromptResponse } from '../models';
import { Validation, PromptResponseValidator } from './PromptResponseValidator';
import { Memory } from '../MemoryFork';

/**
 * Default response validator that always returns true.
 * @template TValue Optional. Type of the validation value returned. Defaults to `any`.
 */
export class DefaultResponseValidator<TValue = any> implements PromptResponseValidator<TValue> {
    /**
     * Validates a response to a prompt.
     * @param context Context for the current turn of conversation with the user.
     * @param memory An interface for accessing state values.
     * @param tokenizer Tokenizer to use for encoding and decoding text.
     * @param response Response to validate.
     * @param remaining_attempts Number of remaining attempts to validate the response.
     * @returns A `Validation` object.
     */
    public validateResponse(
        context: TurnContext,
        memory: Memory,
        tokenizer: Tokenizer,
        response: PromptResponse<string>,
        remaining_attempts: number
    ): Promise<Validation<TValue>> {
        return Promise.resolve({
            type: 'Validation',
            valid: true
        });
    }
}
