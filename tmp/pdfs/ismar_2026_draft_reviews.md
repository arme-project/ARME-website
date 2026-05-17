# ISMAR 2026 Draft Reviews

## Submission 1779 - Multimodal Guidance under IK-Mediated Embodiment: Topological Limits and Gender-Moderated Effects

### Expertise
Knowledgeable

### Contribution
The paper studies whether adding auditory and/or haptic error cues to a visual "puppet" guidance display improves VR motor imitation when the avatar is reconstructed from sparse tracking through inverse kinematics. In a between-subjects experiment with 104 participants, the authors compare visual-only, visual+audio, visual+haptic, and visual+audio+haptic feedback across bimanual gesture imitation. They analyze error at different avatar landmark groups, report short-term learning slopes, and test immediate free and cued recall. The main claimed contribution is that multimodal benefits are limited by IK topology, can trade off with short-term recall, and vary across self-reported gender groups, leading to design guidelines for topology-aware and adaptive multimodal guidance.

### Paper Length
The paper length matches its contribution

### Significance
Good

### Originality
Good

### Research Quality
Poor

### Technical Correctness
Poor

### Writing Style & Organization
Good

### Overall Rating
Probably reject: I would argue for rejecting this submission.

### Detailed Rationale
This is an interesting and timely paper. The topic is relevant to ISMAR because many consumer VR training systems depend on sparse tracking, IK reconstruction, and augmented feedback. The experiment is also substantial in scale, and I appreciate the attempt to look beyond an average condition effect by considering where in the kinematic chain auxiliary feedback can plausibly be acted upon.

However, I have several concerns that affect the validity of the central claims.

First, the strongest claims about gender-moderated haptic effects are not adequately supported by the design. Participant gender is confounded with demonstrator identity and reference motion: male participants trained with one demonstrator/motion set and female participants with another. The authors acknowledge this partly as a limitation, but the title, abstract, and discussion still treat the observed effects as gender-moderated effects of the feedback mapping. This is too strong. A Condition x Gender x Joint Group interaction under different demonstrated motions could reflect differences in the reference trajectories, gesture execution style, avatar scaling, or task difficulty across the two demonstrators, not only differences in participant sensorimotor processing.

Second, the simple within-gender pairwise contrasts are reported as non-significant, whereas the abstract says that haptic inclusion improved performance in the male group and degraded performance in the female group. The significant finger-level DID contrasts support a relative interaction between groups and conditions, but they do not by themselves establish that performance significantly improved in one group and significantly degraded in the other. This is an objective overstatement of the inferential result.

Third, the topology interpretation is more ambitious than the manipulation supports. The auditory and haptic cues are driven by a side-level mean error over elbow, wrist, and fingertips, not by joint-specific errors. Therefore, the study does not actually manipulate topology-specific feedback. The later recommendation to mask haptics for solver-dominated joints is plausible, but it is not directly tested. Similarly, the fingertip landmarks are hierarchy-propagated avatar points, not tracked finger motion. Strong finger effects may primarily reflect amplification of controller/wrist pose through the avatar model rather than user-controlled fingertip accuracy.

Fourth, the recall analysis is problematic. Cued recall is administered only for gestures missed in free recall, but the paper analyzes raw count scores. Participants with different numbers of free-recall failures have different numbers of opportunities to score in cued recall. A more appropriate analysis would use the conditional success proportion for cued trials, or a combined total-recall outcome with the correct denominator. As written, the reported cued-recall effect is difficult to interpret.

Finally, several analysis choices reduce confidence in the robustness of the conclusions: kinematics were logged at only 4 Hz for a motor-imitation task; many hypotheses and high-order interactions are tested; some key conclusions rely on fragile corrected p-values around .043; and the mixed models do not appear to include random slopes or participant-level robustness checks. Inter-rater reliability is also missing for recall scoring.

Overall, the paper has a promising idea and a useful experimental direction, but the main claims about gender moderation, IK topology, and retention trade-offs currently go beyond what the design and analyses can support. I would encourage the authors to substantially soften the causal and demographic language, reanalyze recall with an appropriate denominator, report robustness checks at the participant level, and treat topology-aware masking as a design hypothesis rather than a demonstrated result.

### Comments to Program Chairs
The topic is strong and the sample size is unusually good, but the central claims rest on confounded gender/demonstrator structure and on a topology interpretation that was not directly manipulated. I do not think this is ready in its current form.

### Comments to Reviewers and Program Committee
No additional comments.

### Recommendation for TVCG
Do not recommend this submission for TVCG.

### Comment for TVCG Recommendation
The paper is not sufficiently robust methodologically for TVCG consideration.

### Recommendation for Best Paper
Do not recommend this submission for a best paper award.

### Comment for Best Paper Recommendation
Not a best paper candidate.

---

## Submission 1817 - When Registration Error Becomes Ambiguous: Behavioural Effects of Static Misalignment in Augmented Reality

### Expertise
Knowledgeable

### Contribution
The paper studies how static spatial misalignment between virtual cues and physical targets affects behavior and subjective experience in AR. Using a video see-through headset and a 3 x 3 physical button panel, the authors test multiple lateral offset magnitudes and measure reaction time, movement time, correctness, adaptation after the onset of misalignment, and questionnaire responses. The main contribution is a controlled task paradigm and evidence that registration tolerances should be considered relative to target layout and cue-target ambiguity, rather than as absolute geometric offsets alone.

### Paper Length
The paper length matches its contribution

### Significance
Good

### Originality
Good

### Research Quality
Good

### Technical Correctness
Good

### Writing Style & Organization
Excellent

### Overall Rating
Probably accept: I would argue for accepting this submission.

### Detailed Rationale
This is a clear and useful contribution to the AR registration literature. The paper addresses a practical issue for AR systems: when does geometric misregistration become behaviorally meaningful? The task is simple, reproducible, and well matched to the research question. I especially appreciate the separation of reaction time, movement time, correctness, subjective workload, and adaptation after the switch to misalignment. The writing is unusually clear, and the limitations section is honest about the scope of the findings.

The paper's main strength is that it reframes registration error in terms of action-relevant ambiguity. The results show that small offsets can remain tolerable, whereas larger or locally ambiguous offsets produce measurable costs in response preparation, movement execution, error rate, and perceived interaction quality. This is a useful message for ISMAR because it moves from device accuracy alone toward task-specific registration requirements.

I have several concerns, but I see them as limitations rather than fatal flaws.

First, the ambiguity interpretation is not as clean as the condition labels suggest. The same horizontal offset magnitude can have different perceptual consequences depending on the target column and offset direction. For example, an outward displacement from an edge target is not equivalent to a displacement toward a neighboring target, and a "half spacing" offset is only maximally ambiguous for some target/direction combinations. Since the analyses largely collapse over target identity and offset direction, the ambiguity account is plausible but not directly isolated. A stronger analysis would model target column, offset direction, distance to nearest competing button, or an explicit ambiguity index.

Second, ambiguity and offset magnitude covary in the present design. The authors acknowledge this and propose future work, but some of the discussion still reads as if ambiguity has been demonstrated independently of magnitude. I recommend softening those claims throughout and presenting ambiguity as a supported interpretation that requires direct dissociation.

Third, Baseline and Control are always presented first, before the offset conditions. This means comparisons between zero-offset controls and later offset blocks are partly confounded with practice, fatigue, and headset acclimatization. The block-order analysis among offset conditions is helpful, but it does not fully address the fixed ordering of Baseline and Control.

Fourth, the movement-time normalization removes row/depth effects but cannot account for which hand was used or for lateral movement amplitude. The authors note that the used hand was not reliably captured; this matters because horizontal offset and target location could alter response strategy. Similarly, assigning timeout trials an MT of 5 seconds should be accompanied by a sensitivity analysis excluding timeouts or treating them as censored observations.

Despite these issues, the paper is careful, relevant, and technically credible. The design does not answer every possible question about registration error, but it provides a solid controlled study and a useful framework for thinking about task-specific AR registration tolerance. I recommend acceptance, with revisions focused on clarifying the limits of the ambiguity claim and adding robustness analyses where possible.

### Comments to Program Chairs
This is a solid ISMAR conference-track paper. The main limitation is that ambiguity is inferred rather than independently manipulated, but the paper is transparent about this and still makes a useful contribution.

### Comments to Reviewers and Program Committee
No additional comments.

### Recommendation for TVCG
Do not recommend this submission for TVCG.

### Comment for TVCG Recommendation
The paper is a good conference contribution, but I do not see it as a TVCG-level extension in its current form.

### Recommendation for Best Paper
Do not recommend this submission for a best paper award.

### Comment for Best Paper Recommendation
Strong and clear, but not a best paper candidate.

---

## Submission 2092 - AR-COMPQ: A Dual-Path Perceptual Quality Assessment for Augmented Reality Images Composition

### Expertise
Passing Knowledge

### Contribution
The paper introduces ARC-IQA, a small dataset of AR image compositions with controlled distortions, and proposes AR-COMPQ, a dual-path quality-prediction model intended to account for object fidelity and appearance harmony. The authors collect subjective mean opinion scores from 15 participants and compare the proposed model against standard image-quality metrics and AR-focused metrics using correlation and error measures. The intended contribution is a dataset, a perceptual analysis of AR composition distortions, and a learned full-reference quality model for AR image composition.

### Paper Length
The paper length matches its contribution

### Significance
Acceptable

### Originality
Acceptable

### Research Quality
Poor

### Technical Correctness
Poor

### Writing Style & Organization
Acceptable

### Overall Rating
Probably reject: I would argue for rejecting this submission.

### Detailed Rationale
The paper addresses a relevant problem: perceptual quality in AR image composition is important, and standard natural-image quality metrics may not capture all AR-specific artifacts. A dataset with controlled AR composition distortions could be useful for the community. The high-level distinction between object fidelity and appearance harmony is also reasonable.

However, I have serious concerns about the technical correctness and empirical support for the paper's main claims.

The most important objective issue is in the evaluation of baseline metrics. LPIPS and DreamSim are distance metrics for which lower values indicate higher similarity/quality. The paper reports them with negative correlations and then treats this as poor performance. This is not a valid comparison. These metrics should be sign-reversed or otherwise fitted with the correct monotonic direction before ranking them. If the sign is corrected, LPIPS would have a positive SRCC of about 0.827 and KRCC of about 0.642 from the table values, which appears to exceed the proposed method's SRCC of 0.782 and KRCC of 0.632. This directly undermines the claim that AR-COMPQ outperforms all existing methods.

Relatedly, the RMSE and MAE columns in Table 2 do not appear to be on a common scale across methods. Some methods have RMSE values around 0.3-0.8, PSNR has RMSE above 33, and the proposed method has RMSE 0.106, while the MOS labels are described as 0-100 scores. If nonlinear fitting to MOS was applied, error measures should be comparable in MOS units. As presented, the error columns cannot support the conclusion that the proposed method has the lowest prediction error.

The dataset description is also internally unclear. The table lists 7 scene contexts and distortion counts that do not obviously reconcile with the stated total of 193 images. Some listed "distortion" levels are actually pristine or no-distortion settings, such as JPEG quality 100 and vertex displacement 0. Composition-level artifacts are mentioned as a major distortion category, but they are underdescribed and largely disappear from the later performance analyses, which focus on brightness, color, contrast, texture, and geometry. The paper should provide the exact image-generation matrix, counts per distortion type and severity, and examples of each composition artifact.

The subjective study is too weak to support the claims made from it. Fifteen participants rated 193 images, but the paper reports no confidence intervals for MOS, no inter-subject reliability, no per-distortion rating variance, and no evidence that the participant pool is sufficient for stable perceptual ground truth. Since the model is trained and evaluated on these labels, label reliability is central, not a secondary detail.

The model evaluation also has limited generalization value. Leave-one-content-out cross-validation over only seven contents tests whether the model can handle a held-out object/background pair drawn from the same small construction pipeline and the same distortion types. It does not show generalization to new AR capture pipelines, new distortion families, dynamic AR, head-mounted AR, or external datasets. The paper also compares a learned model trained on this dataset against mostly off-the-shelf metrics, which naturally favors the proposed model unless the baselines are properly adapted or the evaluation is external.

Finally, the practical setting should be clarified. The proposed model uses a pristine reference image and a harmonized version of the distorted image. This makes it a full-reference method with an additional harmonization dependency, but many AR quality-monitoring scenarios do not have access to a pristine reference. The paper should discuss this limitation directly.

Overall, the topic is worthwhile, but the current empirical evidence is not sound enough for acceptance. The metric-orientation issue alone materially changes the main quantitative conclusion. I recommend rejection and encourage the authors to fix the evaluation, expand and document the dataset, report MOS reliability, and validate on a genuinely independent dataset or task.

### Comments to Program Chairs
The main result table appears technically flawed because distance metrics are not oriented correctly. This changes the ranking of methods and undercuts the central claim.

### Comments to Reviewers and Program Committee
No additional comments.

### Recommendation for TVCG
Do not recommend this submission for TVCG.

### Comment for TVCG Recommendation
The evaluation is not reliable enough for TVCG consideration.

### Recommendation for Best Paper
Do not recommend this submission for a best paper award.

### Comment for Best Paper Recommendation
Not a best paper candidate.

---

## Submission 2109 - Error-Related Eye Response: Error Detection and Confidence Support in Upper Limb Virtual Reality Rehabilitation

### Expertise
Knowledgeable

### Contribution
The paper proposes ErrE, a real-time eye-response framework for detecting perceived interaction errors in upper-limb VR rehabilitation and triggering state-preserving corrective feedback. The system uses sliding-window features from blinks, gaze shifts, pupil size, and eye openness, combines three lightweight statistical criteria, and evaluates the method across healthy participants and a patient group. The paper claims high online detection accuracy, low trigger latency, improved task completion time, and improved confidence in both healthy and clinical settings.

### Paper Length
The paper length matches its contribution

### Significance
Good

### Originality
Good

### Research Quality
Poor

### Technical Correctness
Poor

### Writing Style & Organization
Good

### Overall Rating
Probably reject: I would argue for rejecting this submission.

### Detailed Rationale
The paper has an appealing goal. Detecting when a user notices an error and using that signal to provide minimally disruptive assistance is relevant to VR rehabilitation and to adaptive immersive interfaces more broadly. The system is also attractive in principle because eye tracking is increasingly available in VR headsets and the proposed classifier is lightweight and interpretable.

Unfortunately, the evaluation has several methodological problems that make the central claims difficult to trust.

The largest technical issue is the definition of detection accuracy and latency. An event is considered detected if the ErrE score crosses threshold at least once in a window from 500 ms before to 1000 ms after the logged event. Crossings before the event are counted as early detections and assigned 0 ms latency. This is not a valid measure of real-time event detection unless false alarms during normal interaction are also quantified. A threshold crossing before an event may simply be a false positive that happens to fall near a later error. Counting it as a correct detection inflates both accuracy and latency. The paper should report continuous online precision, recall, specificity, false alarms per minute, event-level F1, and a latency distribution computed only for detections that occur after the information required for detection is actually available.

The ground truth is also problematic. The paper repeatedly refers to "perceived error onset," but the alignment point appears to be a logged grab/drop event, not an independently measured time at which the participant perceived an error. In Study 2, the participant is prompted when ErrE itself fires, and that response is used as the primary ground truth for detection accuracy. This creates circularity: false negatives are hard to observe if no prompt appears, and the self-report is not independent of the system alert. The calibration labels also rely on after-trial reports of whether an error was perceived, not on precise perceptual onset times.

The corrective-feedback evaluation is not adequately controlled. In Study 2, the detection-only session precedes the correction session within the same visit. Thus improvements in completion time, error rate, confidence, engagement, or user experience may reflect practice, familiarity, removal of alert prompts, or the task-state correction itself rather than eye-based perceived-error detection. A necessary comparison would include counterbalanced conditions such as no correction, task-logic correction without eye triggering, sham/delayed correction, and ErrE-driven correction. Without those controls, the paper cannot show that the eye-response detector is the causal ingredient.

There is a related issue with the behavioral outcomes. The intervention replaces wrong objects and restores dropped objects. If error rate or completion time is measured after this automatic state correction, improvement is partly mechanical: the system is changing the task state to make recovery faster. That may still be a useful design, but it should not be interpreted as evidence of improved rehabilitation performance or reduced underlying error burden unless initial errors and corrected outcomes are reported separately.

The statistical reporting is also too thin. Accuracy percentages are bounded and appear to be based on small event counts per participant/window, but ANOVA is used without reporting the number of events, confidence intervals, class balance, false-positive rates, or threshold-selection details. The selected 400 ms model is then used clinically, but it is not clear how thresholds and class statistics were transferred, whether any patient-specific calibration occurred, or how robust the method is to differences in diagnosis, eye-tracking quality, or motor ability.

Finally, the clinical claims are overstated. The patient study lasts only two short three-minute sessions and includes a heterogeneous group dominated by upper-limb trauma patients, with only two stroke patients. The results may indicate feasibility of a prototype, but they do not establish clinical effectiveness, rehabilitation benefit, or stable confidence effects over repeated therapy.

Overall, I like the idea and the direction, but the present paper does not yet provide a sufficiently rigorous demonstration. The authors should redesign the evaluation around independent ground truth, continuous false-alarm analysis, counterbalanced correction controls, and clearer separation between initial errors, corrected task state, confidence, and clinical outcomes.

### Comments to Program Chairs
Promising idea, but the accuracy and latency definitions are likely inflated by the event-window scoring rule and the evaluation lacks the controls needed to attribute benefits to eye-based error detection.

### Comments to Reviewers and Program Committee
No additional comments.

### Recommendation for TVCG
Do not recommend this submission for TVCG.

### Comment for TVCG Recommendation
The empirical validation is not strong enough for TVCG consideration.

### Recommendation for Best Paper
Do not recommend this submission for a best paper award.

### Comment for Best Paper Recommendation
Not a best paper candidate.
