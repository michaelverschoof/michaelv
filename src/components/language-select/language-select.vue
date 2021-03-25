<template>
    <div>
        <save-button
            :saving="languageSelectOpened"
            :saved="languageSelected"
            @clicked="openLanguageSelect"
            @enabled="enableLanguageSelect"
        >
            {{ language.caption }}
        </save-button>

        <teleport to="body">
            <modal-dialog
                :visible="languageSelectOpened"
                @close="closeLanguageSelect"
            >
                <div class="language-select p-4">
                    <template
                        v-for="lang in languages"
                        :key="lang"
                    >
                        <radio-input class=""
                            name="language-select"
                            :value="lang.locale"
                            :selected="lang.locale === language.locale"
                            @changed="selectLanguage"
                        >
                            {{ lang.caption }}
                        </radio-input>
                    </template>
                </div>
            </modal-dialog>
        </teleport>
    </div>
</template>

<script lang="ts" src="./language-select.ts"></script>