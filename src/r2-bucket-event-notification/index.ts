/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface R2BucketEventNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#account_id R2BucketEventNotification#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#bucket_name R2BucketEventNotification#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Jurisdiction of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#jurisdiction R2BucketEventNotification#jurisdiction}
  */
  readonly jurisdiction?: string;
  /**
  * Queue ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#queue_id R2BucketEventNotification#queue_id}
  */
  readonly queueId: string;
  /**
  * Array of rules to drive notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#rules R2BucketEventNotification#rules}
  */
  readonly rules: R2BucketEventNotificationRules[] | cdktf.IResolvable;
}
export interface R2BucketEventNotificationRules {
  /**
  * Array of R2 object actions that will trigger notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#actions R2BucketEventNotification#actions}
  */
  readonly actions: string[];
  /**
  * A description that can be used to identify the event notification rule after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#description R2BucketEventNotification#description}
  */
  readonly description?: string;
  /**
  * Notifications will be sent only for objects with this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#prefix R2BucketEventNotification#prefix}
  */
  readonly prefix?: string;
  /**
  * Notifications will be sent only for objects with this suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#suffix R2BucketEventNotification#suffix}
  */
  readonly suffix?: string;
}

export function r2BucketEventNotificationRulesToTerraform(struct?: R2BucketEventNotificationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    description: cdktf.stringToTerraform(struct!.description),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function r2BucketEventNotificationRulesToHclTerraform(struct?: R2BucketEventNotificationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class R2BucketEventNotificationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): R2BucketEventNotificationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: R2BucketEventNotificationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._description = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._description = value.description;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class R2BucketEventNotificationRulesList extends cdktf.ComplexList {
  public internalValue? : R2BucketEventNotificationRules[] | cdktf.IResolvable

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
  public get(index: number): R2BucketEventNotificationRulesOutputReference {
    return new R2BucketEventNotificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}
*/
export class R2BucketEventNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_r2_bucket_event_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a R2BucketEventNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the R2BucketEventNotification to import
  * @param importFromId The id of the existing R2BucketEventNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the R2BucketEventNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_event_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options R2BucketEventNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: R2BucketEventNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_r2_bucket_event_notification',
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
    this._bucketName = config.bucketName;
    this._jurisdiction = config.jurisdiction;
    this._queueId = config.queueId;
    this._rules.internalValue = config.rules;
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

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new R2BucketEventNotificationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: R2BucketEventNotificationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
      queue_id: cdktf.stringToTerraform(this._queueId),
      rules: cdktf.listMapper(r2BucketEventNotificationRulesToTerraform, false)(this._rules.internalValue),
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
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jurisdiction: {
        value: cdktf.stringToHclTerraform(this._jurisdiction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(r2BucketEventNotificationRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "R2BucketEventNotificationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
