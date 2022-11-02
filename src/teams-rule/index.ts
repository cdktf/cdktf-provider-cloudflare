// https://www.terraform.io/docs/providers/cloudflare/r/teams_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#account_id TeamsRule#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#action TeamsRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#description TeamsRule#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#device_posture TeamsRule#device_posture}
  */
  readonly devicePosture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enabled TeamsRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#filters TeamsRule#filters}
  */
  readonly filters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#identity TeamsRule#identity}
  */
  readonly identity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#name TeamsRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#precedence TeamsRule#precedence}
  */
  readonly precedence: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#traffic TeamsRule#traffic}
  */
  readonly traffic?: string;
  /**
  * rule_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#rule_settings TeamsRule#rule_settings}
  */
  readonly ruleSettings?: TeamsRuleRuleSettings;
}
export interface TeamsRuleRuleSettingsBisoAdminControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}
  */
  readonly disableCopyPaste?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_download TeamsRule#disable_download}
  */
  readonly disableDownload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_keyboard TeamsRule#disable_keyboard}
  */
  readonly disableKeyboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_printing TeamsRule#disable_printing}
  */
  readonly disablePrinting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_upload TeamsRule#disable_upload}
  */
  readonly disableUpload?: boolean | cdktf.IResolvable;
}

export function teamsRuleRuleSettingsBisoAdminControlsToTerraform(struct?: TeamsRuleRuleSettingsBisoAdminControlsOutputReference | TeamsRuleRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_copy_paste: cdktf.booleanToTerraform(struct!.disableCopyPaste),
    disable_download: cdktf.booleanToTerraform(struct!.disableDownload),
    disable_keyboard: cdktf.booleanToTerraform(struct!.disableKeyboard),
    disable_printing: cdktf.booleanToTerraform(struct!.disablePrinting),
    disable_upload: cdktf.booleanToTerraform(struct!.disableUpload),
  }
}

export class TeamsRuleRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsRuleRuleSettingsBisoAdminControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableCopyPaste !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCopyPaste = this._disableCopyPaste;
    }
    if (this._disableDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDownload = this._disableDownload;
    }
    if (this._disableKeyboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableKeyboard = this._disableKeyboard;
    }
    if (this._disablePrinting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrinting = this._disablePrinting;
    }
    if (this._disableUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpload = this._disableUpload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsRuleRuleSettingsBisoAdminControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableCopyPaste = undefined;
      this._disableDownload = undefined;
      this._disableKeyboard = undefined;
      this._disablePrinting = undefined;
      this._disableUpload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableCopyPaste = value.disableCopyPaste;
      this._disableDownload = value.disableDownload;
      this._disableKeyboard = value.disableKeyboard;
      this._disablePrinting = value.disablePrinting;
      this._disableUpload = value.disableUpload;
    }
  }

  // disable_copy_paste - computed: false, optional: true, required: false
  private _disableCopyPaste?: boolean | cdktf.IResolvable; 
  public get disableCopyPaste() {
    return this.getBooleanAttribute('disable_copy_paste');
  }
  public set disableCopyPaste(value: boolean | cdktf.IResolvable) {
    this._disableCopyPaste = value;
  }
  public resetDisableCopyPaste() {
    this._disableCopyPaste = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCopyPasteInput() {
    return this._disableCopyPaste;
  }

  // disable_download - computed: false, optional: true, required: false
  private _disableDownload?: boolean | cdktf.IResolvable; 
  public get disableDownload() {
    return this.getBooleanAttribute('disable_download');
  }
  public set disableDownload(value: boolean | cdktf.IResolvable) {
    this._disableDownload = value;
  }
  public resetDisableDownload() {
    this._disableDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDownloadInput() {
    return this._disableDownload;
  }

  // disable_keyboard - computed: false, optional: true, required: false
  private _disableKeyboard?: boolean | cdktf.IResolvable; 
  public get disableKeyboard() {
    return this.getBooleanAttribute('disable_keyboard');
  }
  public set disableKeyboard(value: boolean | cdktf.IResolvable) {
    this._disableKeyboard = value;
  }
  public resetDisableKeyboard() {
    this._disableKeyboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKeyboardInput() {
    return this._disableKeyboard;
  }

  // disable_printing - computed: false, optional: true, required: false
  private _disablePrinting?: boolean | cdktf.IResolvable; 
  public get disablePrinting() {
    return this.getBooleanAttribute('disable_printing');
  }
  public set disablePrinting(value: boolean | cdktf.IResolvable) {
    this._disablePrinting = value;
  }
  public resetDisablePrinting() {
    this._disablePrinting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrintingInput() {
    return this._disablePrinting;
  }

  // disable_upload - computed: false, optional: true, required: false
  private _disableUpload?: boolean | cdktf.IResolvable; 
  public get disableUpload() {
    return this.getBooleanAttribute('disable_upload');
  }
  public set disableUpload(value: boolean | cdktf.IResolvable) {
    this._disableUpload = value;
  }
  public resetDisableUpload() {
    this._disableUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUploadInput() {
    return this._disableUpload;
  }
}
export interface TeamsRuleRuleSettingsCheckSession {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#duration TeamsRule#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enforce TeamsRule#enforce}
  */
  readonly enforce: boolean | cdktf.IResolvable;
}

export function teamsRuleRuleSettingsCheckSessionToTerraform(struct?: TeamsRuleRuleSettingsCheckSessionOutputReference | TeamsRuleRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
  }
}

export class TeamsRuleRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsRuleRuleSettingsCheckSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsRuleRuleSettingsCheckSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enforce = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enforce = value.enforce;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enforce - computed: false, optional: false, required: true
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }
}
export interface TeamsRuleRuleSettingsL4Override {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ip TeamsRule#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#port TeamsRule#port}
  */
  readonly port: number;
}

export function teamsRuleRuleSettingsL4OverrideToTerraform(struct?: TeamsRuleRuleSettingsL4OverrideOutputReference | TeamsRuleRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class TeamsRuleRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsRuleRuleSettingsL4Override | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsRuleRuleSettingsL4Override | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface TeamsRuleRuleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#add_headers TeamsRule#add_headers}
  */
  readonly addHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#block_page_enabled TeamsRule#block_page_enabled}
  */
  readonly blockPageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#block_page_reason TeamsRule#block_page_reason}
  */
  readonly blockPageReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}
  */
  readonly insecureDisableDnssecValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#override_host TeamsRule#override_host}
  */
  readonly overrideHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#override_ips TeamsRule#override_ips}
  */
  readonly overrideIps?: string[];
  /**
  * biso_admin_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}
  */
  readonly bisoAdminControls?: TeamsRuleRuleSettingsBisoAdminControls;
  /**
  * check_session block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#check_session TeamsRule#check_session}
  */
  readonly checkSession?: TeamsRuleRuleSettingsCheckSession;
  /**
  * l4override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#l4override TeamsRule#l4override}
  */
  readonly l4Override?: TeamsRuleRuleSettingsL4Override;
}

export function teamsRuleRuleSettingsToTerraform(struct?: TeamsRuleRuleSettingsOutputReference | TeamsRuleRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addHeaders),
    block_page_enabled: cdktf.booleanToTerraform(struct!.blockPageEnabled),
    block_page_reason: cdktf.stringToTerraform(struct!.blockPageReason),
    insecure_disable_dnssec_validation: cdktf.booleanToTerraform(struct!.insecureDisableDnssecValidation),
    override_host: cdktf.stringToTerraform(struct!.overrideHost),
    override_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideIps),
    biso_admin_controls: teamsRuleRuleSettingsBisoAdminControlsToTerraform(struct!.bisoAdminControls),
    check_session: teamsRuleRuleSettingsCheckSessionToTerraform(struct!.checkSession),
    l4override: teamsRuleRuleSettingsL4OverrideToTerraform(struct!.l4Override),
  }
}

export class TeamsRuleRuleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsRuleRuleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeaders = this._addHeaders;
    }
    if (this._blockPageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageEnabled = this._blockPageEnabled;
    }
    if (this._blockPageReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageReason = this._blockPageReason;
    }
    if (this._insecureDisableDnssecValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureDisableDnssecValidation = this._insecureDisableDnssecValidation;
    }
    if (this._overrideHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideHost = this._overrideHost;
    }
    if (this._overrideIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideIps = this._overrideIps;
    }
    if (this._bisoAdminControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bisoAdminControls = this._bisoAdminControls?.internalValue;
    }
    if (this._checkSession?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSession = this._checkSession?.internalValue;
    }
    if (this._l4Override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Override = this._l4Override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsRuleRuleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeaders = undefined;
      this._blockPageEnabled = undefined;
      this._blockPageReason = undefined;
      this._insecureDisableDnssecValidation = undefined;
      this._overrideHost = undefined;
      this._overrideIps = undefined;
      this._bisoAdminControls.internalValue = undefined;
      this._checkSession.internalValue = undefined;
      this._l4Override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeaders = value.addHeaders;
      this._blockPageEnabled = value.blockPageEnabled;
      this._blockPageReason = value.blockPageReason;
      this._insecureDisableDnssecValidation = value.insecureDisableDnssecValidation;
      this._overrideHost = value.overrideHost;
      this._overrideIps = value.overrideIps;
      this._bisoAdminControls.internalValue = value.bisoAdminControls;
      this._checkSession.internalValue = value.checkSession;
      this._l4Override.internalValue = value.l4Override;
    }
  }

  // add_headers - computed: false, optional: true, required: false
  private _addHeaders?: { [key: string]: string }; 
  public get addHeaders() {
    return this.getStringMapAttribute('add_headers');
  }
  public set addHeaders(value: { [key: string]: string }) {
    this._addHeaders = value;
  }
  public resetAddHeaders() {
    this._addHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeadersInput() {
    return this._addHeaders;
  }

  // block_page_enabled - computed: false, optional: true, required: false
  private _blockPageEnabled?: boolean | cdktf.IResolvable; 
  public get blockPageEnabled() {
    return this.getBooleanAttribute('block_page_enabled');
  }
  public set blockPageEnabled(value: boolean | cdktf.IResolvable) {
    this._blockPageEnabled = value;
  }
  public resetBlockPageEnabled() {
    this._blockPageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageEnabledInput() {
    return this._blockPageEnabled;
  }

  // block_page_reason - computed: false, optional: true, required: false
  private _blockPageReason?: string; 
  public get blockPageReason() {
    return this.getStringAttribute('block_page_reason');
  }
  public set blockPageReason(value: string) {
    this._blockPageReason = value;
  }
  public resetBlockPageReason() {
    this._blockPageReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageReasonInput() {
    return this._blockPageReason;
  }

  // insecure_disable_dnssec_validation - computed: false, optional: true, required: false
  private _insecureDisableDnssecValidation?: boolean | cdktf.IResolvable; 
  public get insecureDisableDnssecValidation() {
    return this.getBooleanAttribute('insecure_disable_dnssec_validation');
  }
  public set insecureDisableDnssecValidation(value: boolean | cdktf.IResolvable) {
    this._insecureDisableDnssecValidation = value;
  }
  public resetInsecureDisableDnssecValidation() {
    this._insecureDisableDnssecValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureDisableDnssecValidationInput() {
    return this._insecureDisableDnssecValidation;
  }

  // override_host - computed: false, optional: true, required: false
  private _overrideHost?: string; 
  public get overrideHost() {
    return this.getStringAttribute('override_host');
  }
  public set overrideHost(value: string) {
    this._overrideHost = value;
  }
  public resetOverrideHost() {
    this._overrideHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideHostInput() {
    return this._overrideHost;
  }

  // override_ips - computed: false, optional: true, required: false
  private _overrideIps?: string[]; 
  public get overrideIps() {
    return this.getListAttribute('override_ips');
  }
  public set overrideIps(value: string[]) {
    this._overrideIps = value;
  }
  public resetOverrideIps() {
    this._overrideIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIpsInput() {
    return this._overrideIps;
  }

  // biso_admin_controls - computed: false, optional: true, required: false
  private _bisoAdminControls = new TeamsRuleRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
  public get bisoAdminControls() {
    return this._bisoAdminControls;
  }
  public putBisoAdminControls(value: TeamsRuleRuleSettingsBisoAdminControls) {
    this._bisoAdminControls.internalValue = value;
  }
  public resetBisoAdminControls() {
    this._bisoAdminControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bisoAdminControlsInput() {
    return this._bisoAdminControls.internalValue;
  }

  // check_session - computed: false, optional: true, required: false
  private _checkSession = new TeamsRuleRuleSettingsCheckSessionOutputReference(this, "check_session");
  public get checkSession() {
    return this._checkSession;
  }
  public putCheckSession(value: TeamsRuleRuleSettingsCheckSession) {
    this._checkSession.internalValue = value;
  }
  public resetCheckSession() {
    this._checkSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSessionInput() {
    return this._checkSession.internalValue;
  }

  // l4override - computed: false, optional: true, required: false
  private _l4Override = new TeamsRuleRuleSettingsL4OverrideOutputReference(this, "l4override");
  public get l4Override() {
    return this._l4Override;
  }
  public putL4Override(value: TeamsRuleRuleSettingsL4Override) {
    this._l4Override.internalValue = value;
  }
  public resetL4Override() {
    this._l4Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4OverrideInput() {
    return this._l4Override.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule cloudflare_teams_rule}
*/
export class TeamsRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_teams_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule cloudflare_teams_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_teams_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.27.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._action = config.action;
    this._description = config.description;
    this._devicePosture = config.devicePosture;
    this._enabled = config.enabled;
    this._filters = config.filters;
    this._id = config.id;
    this._identity = config.identity;
    this._name = config.name;
    this._precedence = config.precedence;
    this._traffic = config.traffic;
    this._ruleSettings.internalValue = config.ruleSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture?: string; 
  public get devicePosture() {
    return this.getStringAttribute('device_posture');
  }
  public set devicePosture(value: string) {
    this._devicePosture = value;
  }
  public resetDevicePosture() {
    this._devicePosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precedence - computed: false, optional: false, required: true
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // rule_settings - computed: false, optional: true, required: false
  private _ruleSettings = new TeamsRuleRuleSettingsOutputReference(this, "rule_settings");
  public get ruleSettings() {
    return this._ruleSettings;
  }
  public putRuleSettings(value: TeamsRuleRuleSettings) {
    this._ruleSettings.internalValue = value;
  }
  public resetRuleSettings() {
    this._ruleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSettingsInput() {
    return this._ruleSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      device_posture: cdktf.stringToTerraform(this._devicePosture),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      traffic: cdktf.stringToTerraform(this._traffic),
      rule_settings: teamsRuleRuleSettingsToTerraform(this._ruleSettings.internalValue),
    };
  }
}
