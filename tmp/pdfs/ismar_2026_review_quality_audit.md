# ISMAR 2026 Review Quality Audit

This audit checks the draft reviews in `tmp/pdfs/ismar_2026_draft_reviews.md` against the paper drafts and the ISMAR 2026 reviewing guidance.

Important policy note: the public ISMAR 2026 reviewing guidelines ask reviewers to refrain from uploading papers to AI systems or writing reviews using AI during the review period. Treat the existing draft reviews as private notes only. The official reviews should be written independently by the reviewer after reading the papers.

## Guideline-Based Quality Criteria

The ISMAR 2026 guidelines emphasize that reviews should:

- Assess conference-paper quality, not journal-paper quality.
- Provide clear reasoning for the score and recommendation.
- Describe the contribution and why it matters to the ISMAR community.
- Discuss both strengths and weaknesses constructively.
- Judge whether the authors' methods support their claims, not whether the reviewer would have run a different study.
- Avoid rejecting for easily fixable issues alone.
- For human-subjects studies, assess whether the sample and design support the claims, and raise concerns constructively.
- Public comments should be substantive, about one page or at least 500 words when warranted.

## Overall Assessment of the Draft Reviews

The draft reviews are generally strong in specificity and grounding. Each review summarizes the contribution, gives a clear recommendation, and identifies claim-method mismatches rather than relying on vague criticism. The reviews also distinguish paper-level contribution from methodological weakness, which aligns well with the ISMAR guidance.

The main area for improvement is tone calibration and score calibration. The reject reviews are mostly justified, but they should more explicitly name the positive contribution before explaining why the flaws are severe. This is especially important for papers 1779 and 2109, where the ideas and experimental effort are meaningful even if the current evidence is not strong enough.

The reviews should also make clearer which issues are fatal for the current submission and which are fixable in revision. ISMAR's guidance warns against rejecting papers for easily addressable issues. The strongest reviews already do this implicitly, but making it explicit would improve fairness.

## Submission 1779

### Quality of Draft Review

The review is largely consistent with the paper. The main critiques are grounded in the draft:

- The paper states that auditory and haptic channels are driven by a side-level aggregate, so the review's concern that topology-specific feedback was not directly manipulated is valid.
- The paper reports gender-matched demonstrators and acknowledges demonstrator identity nested within gender; the review correctly identifies this as a major limitation for gender-moderation claims.
- The paper reports non-significant within-gender pairwise contrasts before using DID tests; the review correctly flags the abstract's stronger "improved/degraded" phrasing as overclaiming.
- Cued recall is measured only for gestures missed in free recall, so the review's denominator concern is important.

### Recommended Improvements

- Keep the overall recommendation as `Probably reject`, but consider changing `Research Quality` from `Poor` to `Acceptable` if the form allows it. The experiment is substantial and reasonably structured; the central problem is validity of the main claims, not absence of research quality.
- Keep `Technical Correctness` as `Poor` or at most `Acceptable`, because the overclaiming and recall analysis problem are central.
- Add one sentence acknowledging the strengths more explicitly: large N for this area, relevant consumer-VR problem, and a thoughtful topology framing.
- Soften any wording that sounds like the review is rejecting the topic rather than the claim support. The best framing is: the work is promising, but the evidence does not support the title/abstract-level claims.

### Consistency Verdict

High consistency with the paper. The review should be slightly more constructive and score-calibrated.

## Submission 1817

### Quality of Draft Review

This is the best calibrated review of the four. The `Probably accept` recommendation is consistent with the written rationale. The review correctly recognizes that the paper's main limitation is not fatal: ambiguity and offset magnitude covary, but the paper acknowledges this and frames it as future work.

The critique about fixed Baseline/Control order is grounded in the paper. The critique about MT normalization and hand-use uncertainty is also grounded in the limitations. The ambiguity-by-target-position critique is a reasonable inference from the task geometry, although the review should keep it phrased as a limitation rather than an error.

### Recommended Improvements

- Leave the ratings as they are.
- Consider adding a sentence that the paper's limitation is acceptable because it is framed honestly and because the main behavioral finding is still useful even if ambiguity is not fully dissociated.
- The TVCG recommendation as "do not recommend" is consistent with a conference-level accept, but if PCS offers only a checkbox, simply leave it unchecked.

### Consistency Verdict

High consistency with the paper and guidelines. This review is fair, constructive, and appropriately positive.

## Submission 2092

### Quality of Draft Review

The draft review is strong and identifies an objective technical issue that directly affects the main conclusion. The LPIPS/DreamSim orientation problem is particularly important: these are distance metrics, so negative correlations do not automatically indicate poor performance. Correcting the sign would change at least part of the ranking, especially for SRCC and KRCC.

The review is also consistent with the paper on the dataset and study limitations:

- The dataset has 193 images and only 15 subjective raters.
- The dataset matrix is not fully reconciled with the reported total.
- Some listed "distortion" settings include no-distortion levels.
- The evaluation is leave-one-content-out over only seven contents.
- The model uses pristine reference and harmonized images, which limits deployment scope.

### Recommended Improvements

- Keep `Probably reject`, `Research Quality Poor`, and `Technical Correctness Poor`.
- Make the metric-orientation issue the first and clearest reason for rejection, as it is the most objective and consequential.
- Add one constructive sentence saying the work could become valuable if the dataset is documented, the subjective labels are validated, and the comparison table is corrected.
- Keep `Expertise` as `Passing Knowledge` if the official reviewer is not an IQA/ML expert. If they are comfortable assessing image-quality metrics, `Knowledgeable` would be defensible.

### Consistency Verdict

Very high consistency with the paper. The review is appropriately severe because the main quantitative claim appears technically compromised.

## Submission 2109

### Quality of Draft Review

The review is well grounded and identifies major validity problems:

- The paper counts threshold crossings in a [-500, 1000] ms window around events as detections and assigns pre-event crossings 0 ms latency.
- The paper mentions suppression of false alarms but does not report false-alarm rate, precision, specificity, or continuous online performance.
- In Study 2, the prompt for self-report is triggered when ErrE fires, which weakens independence of the ground truth.
- Session 1 is detection-only and Session 2 is closed-loop correction, so correction benefits are not cleanly separated from practice/order effects and removal of prompts.
- The patient study is short and heterogeneous, so clinical-effectiveness claims should be limited.

### Recommended Improvements

- Keep `Probably reject`.
- Consider setting `Research Quality` to `Acceptable` rather than `Poor` if the official reviewer wants to acknowledge the multi-study structure and patient feasibility component. Keep `Technical Correctness` as `Poor`, because the detection/latency definition is central.
- Add one explicit strength: the concept of perceived-error-aware correction is novel and clinically relevant.
- Phrase the control-condition criticism as a claim-support issue: "These controls are necessary to support the causal claim," rather than simply saying the authors should have run a different experiment.

### Consistency Verdict

High consistency with the paper. The critique is strong and fair, but the review would benefit from a little more sympathy and clearer separation between promising idea and insufficient validation.

## Cross-Review Calibration

The recommendations are internally consistent:

- `1817` is the only paper with a clean enough design and appropriately bounded claims, so `Probably accept` is reasonable.
- `2092` has a direct quantitative evaluation flaw, so `Probably reject` is well supported.
- `1779` and `2109` have interesting ideas but central claim-validity problems that cannot be fixed by minor edits, so `Probably reject` is defensible.

Suggested score calibration:

| Paper | Current Overall | Suggested Overall | Suggested Research Quality | Suggested Technical Correctness |
|---|---:|---:|---:|---:|
| 1779 | Probably reject | Probably reject | Acceptable or Poor | Poor |
| 1817 | Probably accept | Probably accept | Good | Good |
| 2092 | Probably reject | Probably reject | Poor | Poor |
| 2109 | Probably reject | Probably reject | Acceptable or Poor | Poor |

## Manual Revision Checklist

Before entering official reviews, the reviewer should independently rewrite them and check:

- Does the public rationale include at least one clear strength?
- Does each negative point explain why it affects the paper's claims?
- Are fixable issues separated from severe validity problems?
- Are claims about "objective errors" traceable to the paper text?
- Are ratings consistent with ISMAR's six-point scale?
- Is the review written as a conference-paper review, not as a journal-review demand?
- Is the official review compliant with ISMAR's AI-use and confidentiality guidance?
