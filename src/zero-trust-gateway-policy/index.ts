/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustGatewayPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * The action executed by matched teams rule. Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}
  */
  readonly action: string;
  /**
  * The description of the teams rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}
  */
  readonly description: string;
  /**
  * The wirefilter expression to be used for device_posture check matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}
  */
  readonly devicePosture?: string;
  /**
  * Indicator of rule enablement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The protocol or layer to evaluate the traffic and identity expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}
  */
  readonly filters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#id ZeroTrustGatewayPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The wirefilter expression to be used for identity matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}
  */
  readonly identity?: string;
  /**
  * The name of the teams rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}
  */
  readonly name: string;
  /**
  * The evaluation precedence of the teams rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}
  */
  readonly precedence: number;
  /**
  * The wirefilter expression to be used for traffic matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}
  */
  readonly traffic?: string;
  /**
  * rule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}
  */
  readonly ruleSettings?: ZeroTrustGatewayPolicyRuleSettings;
}
export interface ZeroTrustGatewayPolicyRuleSettingsAuditSsh {
  /**
  * Log all SSH commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#command_logging ZeroTrustGatewayPolicy#command_logging}
  */
  readonly commandLogging: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference | ZeroTrustGatewayPolicyRuleSettingsAuditSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_logging: cdktf.booleanToTerraform(struct!.commandLogging),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference | ZeroTrustGatewayPolicyRuleSettingsAuditSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_logging: {
      value: cdktf.booleanToHclTerraform(struct!.commandLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsAuditSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLogging = this._commandLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLogging = value.commandLogging;
    }
  }

  // command_logging - computed: false, optional: false, required: true
  private _commandLogging?: boolean | cdktf.IResolvable; 
  public get commandLogging() {
    return this.getBooleanAttribute('command_logging');
  }
  public set commandLogging(value: boolean | cdktf.IResolvable) {
    this._commandLogging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLoggingInput() {
    return this._commandLogging;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls {
  /**
  * Disable clipboard redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#disable_clipboard_redirection ZeroTrustGatewayPolicy#disable_clipboard_redirection}
  */
  readonly disableClipboardRedirection?: boolean | cdktf.IResolvable;
  /**
  * Disable copy-paste.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#disable_copy_paste ZeroTrustGatewayPolicy#disable_copy_paste}
  */
  readonly disableCopyPaste?: boolean | cdktf.IResolvable;
  /**
  * Disable download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#disable_download ZeroTrustGatewayPolicy#disable_download}
  */
  readonly disableDownload?: boolean | cdktf.IResolvable;
  /**
  * Disable keyboard usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#disable_keyboard ZeroTrustGatewayPolicy#disable_keyboard}
  */
  readonly disableKeyboard?: boolean | cdktf.IResolvable;
  /**
  * Disable printing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#disable_printing ZeroTrustGatewayPolicy#disable_printing}
  */
  readonly disablePrinting?: boolean | cdktf.IResolvable;
  /**
  * Disable upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#disable_upload ZeroTrustGatewayPolicy#disable_upload}
  */
  readonly disableUpload?: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference | ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_clipboard_redirection: cdktf.booleanToTerraform(struct!.disableClipboardRedirection),
    disable_copy_paste: cdktf.booleanToTerraform(struct!.disableCopyPaste),
    disable_download: cdktf.booleanToTerraform(struct!.disableDownload),
    disable_keyboard: cdktf.booleanToTerraform(struct!.disableKeyboard),
    disable_printing: cdktf.booleanToTerraform(struct!.disablePrinting),
    disable_upload: cdktf.booleanToTerraform(struct!.disableUpload),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference | ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_clipboard_redirection: {
      value: cdktf.booleanToHclTerraform(struct!.disableClipboardRedirection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_copy_paste: {
      value: cdktf.booleanToHclTerraform(struct!.disableCopyPaste),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_download: {
      value: cdktf.booleanToHclTerraform(struct!.disableDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_keyboard: {
      value: cdktf.booleanToHclTerraform(struct!.disableKeyboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_printing: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrinting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_upload: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableClipboardRedirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClipboardRedirection = this._disableClipboardRedirection;
    }
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

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableClipboardRedirection = undefined;
      this._disableCopyPaste = undefined;
      this._disableDownload = undefined;
      this._disableKeyboard = undefined;
      this._disablePrinting = undefined;
      this._disableUpload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableClipboardRedirection = value.disableClipboardRedirection;
      this._disableCopyPaste = value.disableCopyPaste;
      this._disableDownload = value.disableDownload;
      this._disableKeyboard = value.disableKeyboard;
      this._disablePrinting = value.disablePrinting;
      this._disableUpload = value.disableUpload;
    }
  }

  // disable_clipboard_redirection - computed: false, optional: true, required: false
  private _disableClipboardRedirection?: boolean | cdktf.IResolvable; 
  public get disableClipboardRedirection() {
    return this.getBooleanAttribute('disable_clipboard_redirection');
  }
  public set disableClipboardRedirection(value: boolean | cdktf.IResolvable) {
    this._disableClipboardRedirection = value;
  }
  public resetDisableClipboardRedirection() {
    this._disableClipboardRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClipboardRedirectionInput() {
    return this._disableClipboardRedirection;
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
export interface ZeroTrustGatewayPolicyRuleSettingsCheckSession {
  /**
  * Configure how fresh the session needs to be to be considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}
  */
  readonly duration: string;
  /**
  * Enable session enforcement for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#enforce ZeroTrustGatewayPolicy#enforce}
  */
  readonly enforce: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference | ZeroTrustGatewayPolicyRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference | ZeroTrustGatewayPolicyRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsCheckSession | undefined {
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

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsCheckSession | undefined) {
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
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 {
  /**
  * The IPv4 or IPv6 address of the upstream resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
  */
  readonly ip: string;
  /**
  * A port number to use for the upstream resolver. Defaults to `53`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
  */
  readonly port?: number;
  /**
  * Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}
  */
  readonly routeThroughPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * specify a virtual network for this resolver. Uses default virtual network id if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}
  */
  readonly vnetId?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    route_through_private_network: cdktf.booleanToTerraform(struct!.routeThroughPrivateNetwork),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_through_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.routeThroughPrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._routeThroughPrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._routeThroughPrivateNetwork = undefined;
      this._vnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
      this._vnetId = value.vnetId;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // route_through_private_network - computed: false, optional: true, required: false
  private _routeThroughPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get routeThroughPrivateNetwork() {
    return this.getBooleanAttribute('route_through_private_network');
  }
  public set routeThroughPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._routeThroughPrivateNetwork = value;
  }
  public resetRouteThroughPrivateNetwork() {
    this._routeThroughPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeThroughPrivateNetworkInput() {
    return this._routeThroughPrivateNetwork;
  }

  // vnet_id - computed: false, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {
  public internalValue? : ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference {
    return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 {
  /**
  * The IPv4 or IPv6 address of the upstream resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
  */
  readonly ip: string;
  /**
  * A port number to use for the upstream resolver. Defaults to `53`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
  */
  readonly port?: number;
  /**
  * Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}
  */
  readonly routeThroughPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * specify a virtual network for this resolver. Uses default virtual network id if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}
  */
  readonly vnetId?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    route_through_private_network: cdktf.booleanToTerraform(struct!.routeThroughPrivateNetwork),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_through_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.routeThroughPrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._routeThroughPrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeThroughPrivateNetwork = this._routeThroughPrivateNetwork;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._routeThroughPrivateNetwork = undefined;
      this._vnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._routeThroughPrivateNetwork = value.routeThroughPrivateNetwork;
      this._vnetId = value.vnetId;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // route_through_private_network - computed: false, optional: true, required: false
  private _routeThroughPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get routeThroughPrivateNetwork() {
    return this.getBooleanAttribute('route_through_private_network');
  }
  public set routeThroughPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._routeThroughPrivateNetwork = value;
  }
  public resetRouteThroughPrivateNetwork() {
    this._routeThroughPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeThroughPrivateNetworkInput() {
    return this._routeThroughPrivateNetwork;
  }

  // vnet_id - computed: false, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {
  public internalValue? : ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference {
    return new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsDnsResolvers {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}
  */
  readonly ipv4?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}
  */
  readonly ipv6?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference | ZeroTrustGatewayPolicyRuleSettingsDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference | ZeroTrustGatewayPolicyRuleSettingsDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(zeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsEgress {
  /**
  * The IPv4 address to be used for egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}
  */
  readonly ipv4: string;
  /**
  * The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. Can be '0.0.0.0' to indicate local egreass via Warp IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ipv4_fallback ZeroTrustGatewayPolicy#ipv4_fallback}
  */
  readonly ipv4Fallback?: string;
  /**
  * The IPv6 range to be used for egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}
  */
  readonly ipv6: string;
}

export function zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference | ZeroTrustGatewayPolicyRuleSettingsEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv4_fallback: cdktf.stringToTerraform(struct!.ipv4Fallback),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference | ZeroTrustGatewayPolicyRuleSettingsEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_fallback: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv4Fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Fallback = this._ipv4Fallback;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv4Fallback = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv4Fallback = value.ipv4Fallback;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_fallback - computed: false, optional: true, required: false
  private _ipv4Fallback?: string; 
  public get ipv4Fallback() {
    return this.getStringAttribute('ipv4_fallback');
  }
  public set ipv4Fallback(value: string) {
    this._ipv4Fallback = value;
  }
  public resetIpv4Fallback() {
    this._ipv4Fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FallbackInput() {
    return this._ipv4Fallback;
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsL4Override {
  /**
  * Override IP to forward traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}
  */
  readonly ip: string;
  /**
  * Override Port to forward traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}
  */
  readonly port: number;
}

export function zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference | ZeroTrustGatewayPolicyRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference | ZeroTrustGatewayPolicyRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsL4Override | undefined {
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

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsL4Override | undefined) {
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
export interface ZeroTrustGatewayPolicyRuleSettingsNotificationSettings {
  /**
  * Enable notification settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Notification content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#message ZeroTrustGatewayPolicy#message}
  */
  readonly message?: string;
  /**
  * Support URL to show in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#support_url ZeroTrustGatewayPolicy#support_url}
  */
  readonly supportUrl?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference | ZeroTrustGatewayPolicyRuleSettingsNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    message: cdktf.stringToTerraform(struct!.message),
    support_url: cdktf.stringToTerraform(struct!.supportUrl),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference | ZeroTrustGatewayPolicyRuleSettingsNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_url: {
      value: cdktf.stringToHclTerraform(struct!.supportUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._supportUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportUrl = this._supportUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._message = undefined;
      this._supportUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._message = value.message;
      this._supportUrl = value.supportUrl;
    }
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // support_url - computed: false, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsPayloadLog {
  /**
  * Enable or disable DLP Payload Logging for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference | ZeroTrustGatewayPolicyRuleSettingsPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference | ZeroTrustGatewayPolicyRuleSettingsPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsPayloadLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettingsUntrustedCert {
  /**
  * Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}
  */
  readonly action?: string;
}

export function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference | ZeroTrustGatewayPolicyRuleSettingsUntrustedCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference | ZeroTrustGatewayPolicyRuleSettingsUntrustedCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface ZeroTrustGatewayPolicyRuleSettings {
  /**
  * Add custom headers to allowed requests in the form of key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#add_headers ZeroTrustGatewayPolicy#add_headers}
  */
  readonly addHeaders?: { [key: string]: string };
  /**
  * Allow parent MSP accounts to enable bypass their children's rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#allow_child_bypass ZeroTrustGatewayPolicy#allow_child_bypass}
  */
  readonly allowChildBypass?: boolean | cdktf.IResolvable;
  /**
  * Indicator of block page enablement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#block_page_enabled ZeroTrustGatewayPolicy#block_page_enabled}
  */
  readonly blockPageEnabled?: boolean | cdktf.IResolvable;
  /**
  * The displayed reason for a user being blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#block_page_reason ZeroTrustGatewayPolicy#block_page_reason}
  */
  readonly blockPageReason?: string;
  /**
  * Allow child MSP accounts to bypass their parent's rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#bypass_parent_rule ZeroTrustGatewayPolicy#bypass_parent_rule}
  */
  readonly bypassParentRule?: boolean | cdktf.IResolvable;
  /**
  * Set to true, to ignore the category matches at CNAME domains in a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ignore_cname_category_matches ZeroTrustGatewayPolicy#ignore_cname_category_matches}
  */
  readonly ignoreCnameCategoryMatches?: boolean | cdktf.IResolvable;
  /**
  * Disable DNSSEC validation (must be Allow rule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#insecure_disable_dnssec_validation ZeroTrustGatewayPolicy#insecure_disable_dnssec_validation}
  */
  readonly insecureDisableDnssecValidation?: boolean | cdktf.IResolvable;
  /**
  * Turns on IP category based filter on dns if the rule contains dns category checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#ip_categories ZeroTrustGatewayPolicy#ip_categories}
  */
  readonly ipCategories?: boolean | cdktf.IResolvable;
  /**
  * The host to override matching DNS queries with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#override_host ZeroTrustGatewayPolicy#override_host}
  */
  readonly overrideHost?: string;
  /**
  * The IPs to override matching DNS queries with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#override_ips ZeroTrustGatewayPolicy#override_ips}
  */
  readonly overrideIps?: string[];
  /**
  * Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#resolve_dns_through_cloudflare ZeroTrustGatewayPolicy#resolve_dns_through_cloudflare}
  */
  readonly resolveDnsThroughCloudflare?: boolean | cdktf.IResolvable;
  /**
  * audit_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#audit_ssh ZeroTrustGatewayPolicy#audit_ssh}
  */
  readonly auditSsh?: ZeroTrustGatewayPolicyRuleSettingsAuditSsh;
  /**
  * biso_admin_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#biso_admin_controls ZeroTrustGatewayPolicy#biso_admin_controls}
  */
  readonly bisoAdminControls?: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls;
  /**
  * check_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#check_session ZeroTrustGatewayPolicy#check_session}
  */
  readonly checkSession?: ZeroTrustGatewayPolicyRuleSettingsCheckSession;
  /**
  * dns_resolvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#dns_resolvers ZeroTrustGatewayPolicy#dns_resolvers}
  */
  readonly dnsResolvers?: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#egress ZeroTrustGatewayPolicy#egress}
  */
  readonly egress?: ZeroTrustGatewayPolicyRuleSettingsEgress;
  /**
  * l4override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#l4override ZeroTrustGatewayPolicy#l4override}
  */
  readonly l4Override?: ZeroTrustGatewayPolicyRuleSettingsL4Override;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#notification_settings ZeroTrustGatewayPolicy#notification_settings}
  */
  readonly notificationSettings?: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings;
  /**
  * payload_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#payload_log ZeroTrustGatewayPolicy#payload_log}
  */
  readonly payloadLog?: ZeroTrustGatewayPolicyRuleSettingsPayloadLog;
  /**
  * untrusted_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#untrusted_cert ZeroTrustGatewayPolicy#untrusted_cert}
  */
  readonly untrustedCert?: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert;
}

export function zeroTrustGatewayPolicyRuleSettingsToTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsOutputReference | ZeroTrustGatewayPolicyRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addHeaders),
    allow_child_bypass: cdktf.booleanToTerraform(struct!.allowChildBypass),
    block_page_enabled: cdktf.booleanToTerraform(struct!.blockPageEnabled),
    block_page_reason: cdktf.stringToTerraform(struct!.blockPageReason),
    bypass_parent_rule: cdktf.booleanToTerraform(struct!.bypassParentRule),
    ignore_cname_category_matches: cdktf.booleanToTerraform(struct!.ignoreCnameCategoryMatches),
    insecure_disable_dnssec_validation: cdktf.booleanToTerraform(struct!.insecureDisableDnssecValidation),
    ip_categories: cdktf.booleanToTerraform(struct!.ipCategories),
    override_host: cdktf.stringToTerraform(struct!.overrideHost),
    override_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overrideIps),
    resolve_dns_through_cloudflare: cdktf.booleanToTerraform(struct!.resolveDnsThroughCloudflare),
    audit_ssh: zeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct!.auditSsh),
    biso_admin_controls: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct!.bisoAdminControls),
    check_session: zeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct!.checkSession),
    dns_resolvers: zeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct!.dnsResolvers),
    egress: zeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct!.egress),
    l4override: zeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct!.l4Override),
    notification_settings: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct!.notificationSettings),
    payload_log: zeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct!.payloadLog),
    untrusted_cert: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct!.untrustedCert),
  }
}


export function zeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct?: ZeroTrustGatewayPolicyRuleSettingsOutputReference | ZeroTrustGatewayPolicyRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allow_child_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.allowChildBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_page_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.blockPageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_page_reason: {
      value: cdktf.stringToHclTerraform(struct!.blockPageReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_parent_rule: {
      value: cdktf.booleanToHclTerraform(struct!.bypassParentRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_cname_category_matches: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCnameCategoryMatches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_disable_dnssec_validation: {
      value: cdktf.booleanToHclTerraform(struct!.insecureDisableDnssecValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_categories: {
      value: cdktf.booleanToHclTerraform(struct!.ipCategories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_host: {
      value: cdktf.stringToHclTerraform(struct!.overrideHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overrideIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resolve_dns_through_cloudflare: {
      value: cdktf.booleanToHclTerraform(struct!.resolveDnsThroughCloudflare),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_ssh: {
      value: zeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct!.auditSsh),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsAuditSshList",
    },
    biso_admin_controls: {
      value: zeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct!.bisoAdminControls),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsList",
    },
    check_session: {
      value: zeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct!.checkSession),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsCheckSessionList",
    },
    dns_resolvers: {
      value: zeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct!.dnsResolvers),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsDnsResolversList",
    },
    egress: {
      value: zeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsEgressList",
    },
    l4override: {
      value: zeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct!.l4Override),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsL4OverrideList",
    },
    notification_settings: {
      value: zeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsList",
    },
    payload_log: {
      value: zeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct!.payloadLog),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsPayloadLogList",
    },
    untrusted_cert: {
      value: zeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct!.untrustedCert),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustGatewayPolicyRuleSettingsUntrustedCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustGatewayPolicyRuleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeaders = this._addHeaders;
    }
    if (this._allowChildBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowChildBypass = this._allowChildBypass;
    }
    if (this._blockPageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageEnabled = this._blockPageEnabled;
    }
    if (this._blockPageReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageReason = this._blockPageReason;
    }
    if (this._bypassParentRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassParentRule = this._bypassParentRule;
    }
    if (this._ignoreCnameCategoryMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCnameCategoryMatches = this._ignoreCnameCategoryMatches;
    }
    if (this._insecureDisableDnssecValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureDisableDnssecValidation = this._insecureDisableDnssecValidation;
    }
    if (this._ipCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCategories = this._ipCategories;
    }
    if (this._overrideHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideHost = this._overrideHost;
    }
    if (this._overrideIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideIps = this._overrideIps;
    }
    if (this._resolveDnsThroughCloudflare !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveDnsThroughCloudflare = this._resolveDnsThroughCloudflare;
    }
    if (this._auditSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSsh = this._auditSsh?.internalValue;
    }
    if (this._bisoAdminControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bisoAdminControls = this._bisoAdminControls?.internalValue;
    }
    if (this._checkSession?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSession = this._checkSession?.internalValue;
    }
    if (this._dnsResolvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolvers = this._dnsResolvers?.internalValue;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._l4Override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Override = this._l4Override?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._payloadLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadLog = this._payloadLog?.internalValue;
    }
    if (this._untrustedCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedCert = this._untrustedCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustGatewayPolicyRuleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeaders = undefined;
      this._allowChildBypass = undefined;
      this._blockPageEnabled = undefined;
      this._blockPageReason = undefined;
      this._bypassParentRule = undefined;
      this._ignoreCnameCategoryMatches = undefined;
      this._insecureDisableDnssecValidation = undefined;
      this._ipCategories = undefined;
      this._overrideHost = undefined;
      this._overrideIps = undefined;
      this._resolveDnsThroughCloudflare = undefined;
      this._auditSsh.internalValue = undefined;
      this._bisoAdminControls.internalValue = undefined;
      this._checkSession.internalValue = undefined;
      this._dnsResolvers.internalValue = undefined;
      this._egress.internalValue = undefined;
      this._l4Override.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._payloadLog.internalValue = undefined;
      this._untrustedCert.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeaders = value.addHeaders;
      this._allowChildBypass = value.allowChildBypass;
      this._blockPageEnabled = value.blockPageEnabled;
      this._blockPageReason = value.blockPageReason;
      this._bypassParentRule = value.bypassParentRule;
      this._ignoreCnameCategoryMatches = value.ignoreCnameCategoryMatches;
      this._insecureDisableDnssecValidation = value.insecureDisableDnssecValidation;
      this._ipCategories = value.ipCategories;
      this._overrideHost = value.overrideHost;
      this._overrideIps = value.overrideIps;
      this._resolveDnsThroughCloudflare = value.resolveDnsThroughCloudflare;
      this._auditSsh.internalValue = value.auditSsh;
      this._bisoAdminControls.internalValue = value.bisoAdminControls;
      this._checkSession.internalValue = value.checkSession;
      this._dnsResolvers.internalValue = value.dnsResolvers;
      this._egress.internalValue = value.egress;
      this._l4Override.internalValue = value.l4Override;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._payloadLog.internalValue = value.payloadLog;
      this._untrustedCert.internalValue = value.untrustedCert;
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

  // allow_child_bypass - computed: false, optional: true, required: false
  private _allowChildBypass?: boolean | cdktf.IResolvable; 
  public get allowChildBypass() {
    return this.getBooleanAttribute('allow_child_bypass');
  }
  public set allowChildBypass(value: boolean | cdktf.IResolvable) {
    this._allowChildBypass = value;
  }
  public resetAllowChildBypass() {
    this._allowChildBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChildBypassInput() {
    return this._allowChildBypass;
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

  // bypass_parent_rule - computed: false, optional: true, required: false
  private _bypassParentRule?: boolean | cdktf.IResolvable; 
  public get bypassParentRule() {
    return this.getBooleanAttribute('bypass_parent_rule');
  }
  public set bypassParentRule(value: boolean | cdktf.IResolvable) {
    this._bypassParentRule = value;
  }
  public resetBypassParentRule() {
    this._bypassParentRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassParentRuleInput() {
    return this._bypassParentRule;
  }

  // ignore_cname_category_matches - computed: false, optional: true, required: false
  private _ignoreCnameCategoryMatches?: boolean | cdktf.IResolvable; 
  public get ignoreCnameCategoryMatches() {
    return this.getBooleanAttribute('ignore_cname_category_matches');
  }
  public set ignoreCnameCategoryMatches(value: boolean | cdktf.IResolvable) {
    this._ignoreCnameCategoryMatches = value;
  }
  public resetIgnoreCnameCategoryMatches() {
    this._ignoreCnameCategoryMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCnameCategoryMatchesInput() {
    return this._ignoreCnameCategoryMatches;
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

  // ip_categories - computed: false, optional: true, required: false
  private _ipCategories?: boolean | cdktf.IResolvable; 
  public get ipCategories() {
    return this.getBooleanAttribute('ip_categories');
  }
  public set ipCategories(value: boolean | cdktf.IResolvable) {
    this._ipCategories = value;
  }
  public resetIpCategories() {
    this._ipCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCategoriesInput() {
    return this._ipCategories;
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

  // resolve_dns_through_cloudflare - computed: false, optional: true, required: false
  private _resolveDnsThroughCloudflare?: boolean | cdktf.IResolvable; 
  public get resolveDnsThroughCloudflare() {
    return this.getBooleanAttribute('resolve_dns_through_cloudflare');
  }
  public set resolveDnsThroughCloudflare(value: boolean | cdktf.IResolvable) {
    this._resolveDnsThroughCloudflare = value;
  }
  public resetResolveDnsThroughCloudflare() {
    this._resolveDnsThroughCloudflare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveDnsThroughCloudflareInput() {
    return this._resolveDnsThroughCloudflare;
  }

  // audit_ssh - computed: false, optional: true, required: false
  private _auditSsh = new ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(this, "audit_ssh");
  public get auditSsh() {
    return this._auditSsh;
  }
  public putAuditSsh(value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh) {
    this._auditSsh.internalValue = value;
  }
  public resetAuditSsh() {
    this._auditSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSshInput() {
    return this._auditSsh.internalValue;
  }

  // biso_admin_controls - computed: false, optional: true, required: false
  private _bisoAdminControls = new ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
  public get bisoAdminControls() {
    return this._bisoAdminControls;
  }
  public putBisoAdminControls(value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls) {
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
  private _checkSession = new ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(this, "check_session");
  public get checkSession() {
    return this._checkSession;
  }
  public putCheckSession(value: ZeroTrustGatewayPolicyRuleSettingsCheckSession) {
    this._checkSession.internalValue = value;
  }
  public resetCheckSession() {
    this._checkSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSessionInput() {
    return this._checkSession.internalValue;
  }

  // dns_resolvers - computed: false, optional: true, required: false
  private _dnsResolvers = new ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(this, "dns_resolvers");
  public get dnsResolvers() {
    return this._dnsResolvers;
  }
  public putDnsResolvers(value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers) {
    this._dnsResolvers.internalValue = value;
  }
  public resetDnsResolvers() {
    this._dnsResolvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolversInput() {
    return this._dnsResolvers.internalValue;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: ZeroTrustGatewayPolicyRuleSettingsEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // l4override - computed: false, optional: true, required: false
  private _l4Override = new ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(this, "l4override");
  public get l4Override() {
    return this._l4Override;
  }
  public putL4Override(value: ZeroTrustGatewayPolicyRuleSettingsL4Override) {
    this._l4Override.internalValue = value;
  }
  public resetL4Override() {
    this._l4Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4OverrideInput() {
    return this._l4Override.internalValue;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // payload_log - computed: false, optional: true, required: false
  private _payloadLog = new ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(this, "payload_log");
  public get payloadLog() {
    return this._payloadLog;
  }
  public putPayloadLog(value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog) {
    this._payloadLog.internalValue = value;
  }
  public resetPayloadLog() {
    this._payloadLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLogInput() {
    return this._payloadLog.internalValue;
  }

  // untrusted_cert - computed: false, optional: true, required: false
  private _untrustedCert = new ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(this, "untrusted_cert");
  public get untrustedCert() {
    return this._untrustedCert;
  }
  public putUntrustedCert(value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert) {
    this._untrustedCert.internalValue = value;
  }
  public resetUntrustedCert() {
    this._untrustedCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCertInput() {
    return this._untrustedCert.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export class ZeroTrustGatewayPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustGatewayPolicy to import
  * @param importFromId The id of the existing ZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustGatewayPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustGatewayPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.43.0',
        providerVersionConstraint: '~> 4.3'
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
  private _ruleSettings = new ZeroTrustGatewayPolicyRuleSettingsOutputReference(this, "rule_settings");
  public get ruleSettings() {
    return this._ruleSettings;
  }
  public putRuleSettings(value: ZeroTrustGatewayPolicyRuleSettings) {
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
      rule_settings: zeroTrustGatewayPolicyRuleSettingsToTerraform(this._ruleSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_posture: {
        value: cdktf.stringToHclTerraform(this._devicePosture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      precedence: {
        value: cdktf.numberToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic: {
        value: cdktf.stringToHclTerraform(this._traffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_settings: {
        value: zeroTrustGatewayPolicyRuleSettingsToHclTerraform(this._ruleSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustGatewayPolicyRuleSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
