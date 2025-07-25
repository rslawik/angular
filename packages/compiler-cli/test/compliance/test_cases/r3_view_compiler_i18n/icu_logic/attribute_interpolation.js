consts: () => {
  let $i18n_1$;
  if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @suppress {msgDescriptions}
     */
    const $MSG_EXTERNAL_6301050568345677976__ATTRIBUTE_INTERPOLATION_TS_2$ = goog.getMsg("{VAR_SELECT, select, other {{START_TAG_SPAN}foo{CLOSE_TAG_SPAN}}}");
    $i18n_1$ = $MSG_EXTERNAL_6301050568345677976__ATTRIBUTE_INTERPOLATION_TS_2$;
  } else {
    $i18n_1$ = $localize`{VAR_SELECT, select, other {{START_TAG_SPAN}foo{CLOSE_TAG_SPAN}}}`;
  }
  $i18n_1$ = $r3$.ɵɵi18nPostprocess($i18n_1$, {
    "CLOSE_TAG_SPAN": "</span>",
    "START_TAG_SPAN": "<span title=\"\uFFFD1\uFFFD-\uFFFD2\uFFFD\">",
    "VAR_SELECT": "\uFFFD0\uFFFD"
  });
  let $i18n_3$;
  if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @suppress {msgDescriptions}
     */
    const $MSG_EXTERNAL_369205108016154659__ATTRIBUTE_INTERPOLATION_TS_4$ = goog.getMsg("{VAR_SELECT, select, other {{INTERPOLATION}-{INTERPOLATION}}}");
    $i18n_3$ = $MSG_EXTERNAL_369205108016154659__ATTRIBUTE_INTERPOLATION_TS_4$;
  } else {
    $i18n_3$ = $localize`{VAR_SELECT, select, other {{INTERPOLATION}-{INTERPOLATION}}}`;
  }
  $i18n_3$ = $r3$.ɵɵi18nPostprocess($i18n_3$, {
    "INTERPOLATION": "\uFFFD4\uFFFD",
    "VAR_SELECT": "\uFFFD3\uFFFD"
  });
  let $i18n_0$;
  if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @suppress {msgDescriptions}
     */
    const $MSG_EXTERNAL_6009429127580785009__ATTRIBUTE_INTERPOLATION_TS_5$ = goog.getMsg(
        "{$startTagSpan}{$closeTagSpan}{$startTagSpan_1}{$icu}{$closeTagSpan}{$startTagSpan_1}{$icu_1}{$closeTagSpan}",
        {
          "closeTagSpan": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]",
          "icu": $i18n_1$,
          "icu_1": $i18n_3$,
          "startTagSpan": "\uFFFD#2\uFFFD",
          "startTagSpan_1": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "icu": "{foo, select, other {<span title=\"{{foo}}-{{foo}}\">foo</span>}}",
            "icu_1": "{foo, select, other {{{foo}}-{{foo}}}}",
            "startTagSpan": "<span title=\"{{foo}}-{{foo}}\">",
            "startTagSpan_1": "<span>"
          }
        });
    $i18n_0$ = $MSG_EXTERNAL_6009429127580785009__ATTRIBUTE_INTERPOLATION_TS_5$;
  } else {
    $i18n_0$ = $localize`${"\uFFFD#2\uFFFD"}:START_TAG_SPAN:${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_SPAN:${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_SPAN_1:${$i18n_1$}:ICU@@6051755734147382484:${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_SPAN:${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_SPAN_1:${$i18n_3$}:ICU_1@@7593934392904803263:${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_SPAN:`;
  }
  $i18n_0$ = $r3$.ɵɵi18nPostprocess($i18n_0$);
  return [$i18n_0$, [3, "title"]];
},
template: function MyComponent_Template(rf, ctx) {
  if (rf & 1) {
    $r3$.ɵɵdomElementStart(0, "div");
    $r3$.ɵɵi18nStart(1, 0);
    $r3$.ɵɵdomElement(2, "span", 1)(3, "span")(4, "span");
    $r3$.ɵɵi18nEnd();
    $r3$.ɵɵdomElementEnd();
  }
  if (rf & 2) {
    $r3$.ɵɵadvance(2);
    $r3$.ɵɵdomProperty("title", $r3$.ɵɵinterpolate2("", ctx.foo, "-", ctx.foo));
    $r3$.ɵɵadvance(2);
    $r3$.ɵɵi18nExp(ctx.foo)(ctx.foo)(ctx.foo)(ctx.foo)(ctx.foo);
    $r3$.ɵɵi18nApply(1);
  }
}
