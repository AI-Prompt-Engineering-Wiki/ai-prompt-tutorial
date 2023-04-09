# AI Prompt Engineering 常见规则与限制<Badge type="tip" text="阅读时长 10-15 分钟" />

在 AI Prompt Engineering 中，了解常见的规则和限制对于设计有效的自然语言和图像提示至关重要。遵循这些规则和限制可以提高生成结果的质量、准确性和连贯性。本章节将介绍一些常见的规则和限制，并给出相关的论文引用和示例。

## 1. 限制输入长度

AI 模型（如 GPT 系列）通常具有固定的最大输入长度限制，例如 GPT-3 的最大输入长度为 2048 个 token<sup><a href="#文献引用">[1]</a></sup>，GPT-3.5 的最大输入长度为 4096 个 token。超过此限制的输入可能导致截断，从而影响生成结果。设计提示时，应确保输入长度在模型可接受的范围内。

> 被截断时，你可以使用 prompt `继续` 让大模型继续完成任务

## 2. 控制输出长度

通过控制生成的输出长度，可以避免生成过长或过短的文本。使用特定的参数，如 max_tokens，可以限制模型输出的最大长度<sup><a href="#文献引用">[2]</a></sup>。这可以保证生成结果的可读性和可理解性。

> Q: `创作一句诗 max_tokens(20)，要信息量大` <br>A: `世事如棋，天下熙熙，一局荣辱，非常之事。`

## 3. 提高模型生成结果的可靠性

为了提高 AI 模型生成结果的可靠性，可以使用以下方法：

在文本提示中添加信号词，如“正确地”或“准确地”，以引导模型生成更可靠的输出<sup><a href="#文献引用">[3]</a></sup>。
设置模型的温度参数(temperature parameter)。较低的温度值可以使模型生成更确定性的输出(可能会过拟合)，而较高的温度值可以使模型生成更多样性的输出<sup><a href="#文献引用">[4]</a></sup>。

> 例如 new bing 中的 创意/平衡/精确

## 4. 避免生成不当内容

为了防止 AI 模型生成不当内容，可以采取以下措施：

设计适当的过滤器和约束，以阻止模型生成具有敏感、不道德或有害内容的输出<sup><a href="#文献引用">[5]</a></sup>。
使用负向示例进行训练，以教导模型避免生成不当内容<sup><a href="#文献引用">[6]</a></sup>。

> 在 RLHF 训练中额外引入一组与安全相关的提示、以及基于规则的奖励模型 (RBRM)

## 5. 了解模型的泛化能力的局限性

AI 模型可能在一些任务上具有较强的泛化能力，但在其他任务上可能表现不佳。了解模型的泛化能力的局限性可以帮助我们为特定任务选择合适的模型<sup><a href="#文献引用">[7]</a></sup>。

## 6. 大型语言模型的记忆限制

大型语言模型在处理长文本或长对话时可能受到记忆限制<sup><a href="#文献引用">[1]</a></sup>。这意味着，当对话长度超过模型的输入长度限制时，早期的对话内容可能被遗忘，从而影响模型的输出结果。为了解决这个问题，我们可以采用一些技巧来提高模型在长对话中的表现。例如，可以使用摘要技术对早期的对话进行压缩<sup><a href="#文献引用">[8]</a></sup>，或者通过上下文窗口将输入文本分成较小的片段<sup><a href="#文献引用">[9]</a></sup>。

## 小结

尽管 AI Prompt Engineering 可以帮助我们更好地引导 AI 模型生成所需的输出结果，但它也存在一些局限性。这些局限性包括模型的输入长度限制、输出长度控制、可靠性、生成不当内容的风险以及泛化能力和局限性。此外，大型语言模型的记忆有限，可能需要一些技巧来让当前的大型模型在更长的对话中保持一致性。了解这些规则和限制对于设计有效的自然语言和图像提示至关重要，可以帮助我们更好地利用 AI 模型解决实际问题。

## <span id="文献引用">文献引用</span>

[1] Brown T, Mann B, Ryder N, et al. Language models are few-shot learners[J]. Advances in neural information processing systems, 2020, 33: 1877-1901.<br>
[2] Radford A, Narasimhan K, Salimans T, et al. Improving language understanding by generative pre-training[J]. 2018.<br>
[3] Devlin J, Chang M W, Lee K, et al. Bert: Pre-training of deep bidirectional transformers for language understanding[J]. arXiv preprint arXiv:1810.04805, 2018.<br>
[4] Hinton G, Vinyals O, Dean J. Distilling the knowledge in a neural network[J]. arXiv preprint arXiv:1503.02531, 2015.<br>
[5] Gehman C, Gururangan S, Stiennon N, et al. RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models[J]. arXiv preprint arXiv:2009.11462, 2020.<br>
[6] Dinan E, Fan A, Wu Y, et al. Adversarial training for free![J]. Advances in Neural Information Processing Systems, 2020, 33.<br>
[7] Shafahi A, Najibi M, Ghiasi M A, et al. Adversarial training for free![J]. Advances in Neural Information Processing Systems, 2019, 32.<br>
[8] Liu Y, Lapata M. Text summarization with pretrained encoders[J]. arXiv preprint arXiv:1908.08345, 2019.<br>
[9] Lample G, Sablayrolles A, Ranzato M A, et al. Large memory layers with product keys[J]. Advances in Neural Information Processing Systems, 2019, 32.<br>
