/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessAiControlsMcpPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}
  */
  readonly hostname: string;
  /**
  * portal id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#id ZeroTrustAccessAiControlsMcpPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}
  */
  readonly servers?: ZeroTrustAccessAiControlsMcpPortalServers[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}
  */
  readonly name: string;
}

export function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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
}

export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference {
    return new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}
  */
  readonly name: string;
}

export function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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
}

export class ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference {
    return new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessAiControlsMcpPortalServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}
  */
  readonly defaultDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}
  */
  readonly onBehalf?: boolean | cdktf.IResolvable;
  /**
  * server id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#server_id ZeroTrustAccessAiControlsMcpPortal#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}
  */
  readonly updatedPrompts?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}
  */
  readonly updatedTools?: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] | cdktf.IResolvable;
}

export function zeroTrustAccessAiControlsMcpPortalServersToTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_disabled: cdktf.booleanToTerraform(struct!.defaultDisabled),
    on_behalf: cdktf.booleanToTerraform(struct!.onBehalf),
    server_id: cdktf.stringToTerraform(struct!.serverId),
    updated_prompts: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToTerraform, false)(struct!.updatedPrompts),
    updated_tools: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToTerraform, false)(struct!.updatedTools),
  }
}


export function zeroTrustAccessAiControlsMcpPortalServersToHclTerraform(struct?: ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.defaultDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_behalf: {
      value: cdktf.booleanToHclTerraform(struct!.onBehalf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_id: {
      value: cdktf.stringToHclTerraform(struct!.serverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_prompts: {
      value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsToHclTerraform, false)(struct!.updatedPrompts),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList",
    },
    updated_tools: {
      value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersUpdatedToolsToHclTerraform, false)(struct!.updatedTools),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessAiControlsMcpPortalServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDisabled = this._defaultDisabled;
    }
    if (this._onBehalf !== undefined) {
      hasAnyValues = true;
      internalValueResult.onBehalf = this._onBehalf;
    }
    if (this._serverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverId = this._serverId;
    }
    if (this._updatedPrompts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedPrompts = this._updatedPrompts?.internalValue;
    }
    if (this._updatedTools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedTools = this._updatedTools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessAiControlsMcpPortalServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDisabled = undefined;
      this._onBehalf = undefined;
      this._serverId = undefined;
      this._updatedPrompts.internalValue = undefined;
      this._updatedTools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultDisabled = value.defaultDisabled;
      this._onBehalf = value.onBehalf;
      this._serverId = value.serverId;
      this._updatedPrompts.internalValue = value.updatedPrompts;
      this._updatedTools.internalValue = value.updatedTools;
    }
  }

  // default_disabled - computed: true, optional: true, required: false
  private _defaultDisabled?: boolean | cdktf.IResolvable; 
  public get defaultDisabled() {
    return this.getBooleanAttribute('default_disabled');
  }
  public set defaultDisabled(value: boolean | cdktf.IResolvable) {
    this._defaultDisabled = value;
  }
  public resetDefaultDisabled() {
    this._defaultDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDisabledInput() {
    return this._defaultDisabled;
  }

  // on_behalf - computed: true, optional: true, required: false
  private _onBehalf?: boolean | cdktf.IResolvable; 
  public get onBehalf() {
    return this.getBooleanAttribute('on_behalf');
  }
  public set onBehalf(value: boolean | cdktf.IResolvable) {
    this._onBehalf = value;
  }
  public resetOnBehalf() {
    this._onBehalf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBehalfInput() {
    return this._onBehalf;
  }

  // server_id - computed: true, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // updated_prompts - computed: true, optional: true, required: false
  private _updatedPrompts = new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(this, "updated_prompts", false);
  public get updatedPrompts() {
    return this._updatedPrompts;
  }
  public putUpdatedPrompts(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] | cdktf.IResolvable) {
    this._updatedPrompts.internalValue = value;
  }
  public resetUpdatedPrompts() {
    this._updatedPrompts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedPromptsInput() {
    return this._updatedPrompts.internalValue;
  }

  // updated_tools - computed: true, optional: true, required: false
  private _updatedTools = new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(this, "updated_tools", false);
  public get updatedTools() {
    return this._updatedTools;
  }
  public putUpdatedTools(value: ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] | cdktf.IResolvable) {
    this._updatedTools.internalValue = value;
  }
  public resetUpdatedTools() {
    this._updatedTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedToolsInput() {
    return this._updatedTools.internalValue;
  }
}

export class ZeroTrustAccessAiControlsMcpPortalServersList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessAiControlsMcpPortalServers[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessAiControlsMcpPortalServersOutputReference {
    return new ZeroTrustAccessAiControlsMcpPortalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}
*/
export class ZeroTrustAccessAiControlsMcpPortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_ai_controls_mcp_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import
  * @param importFromId The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_ai_controls_mcp_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessAiControlsMcpPortalConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessAiControlsMcpPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_ai_controls_mcp_portal',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
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
    this._description = config.description;
    this._hostname = config.hostname;
    this._id = config.id;
    this._name = config.name;
    this._servers.internalValue = config.servers;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // servers - computed: true, optional: true, required: false
  private _servers = new ZeroTrustAccessAiControlsMcpPortalServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: ZeroTrustAccessAiControlsMcpPortalServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      servers: cdktf.listMapper(zeroTrustAccessAiControlsMcpPortalServersToTerraform, false)(this._servers.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      servers: {
        value: cdktf.listMapperHcl(zeroTrustAccessAiControlsMcpPortalServersToHclTerraform, false)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessAiControlsMcpPortalServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
