/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSecurityTrustedDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}
  */
  readonly body?: EmailSecurityTrustedDomainsBody[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}
  */
  readonly comments?: string;
  /**
  * Select to prevent recently registered domains from triggering a
  * Suspicious or Malicious disposition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}
  */
  readonly isRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}
  */
  readonly isRegex?: boolean | cdktf.IResolvable;
  /**
  * Select for partner or other approved domains that have similar
  * spelling to your connected domains. Prevents listed domains from
  * triggering a Spoof disposition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}
  */
  readonly isSimilarity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}
  */
  readonly pattern?: string;
}
export interface EmailSecurityTrustedDomainsBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}
  */
  readonly comments?: string;
  /**
  * Select to prevent recently registered domains from triggering a
  * Suspicious or Malicious disposition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}
  */
  readonly isRecent: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}
  */
  readonly isRegex: boolean | cdktf.IResolvable;
  /**
  * Select for partner or other approved domains that have similar
  * spelling to your connected domains. Prevents listed domains from
  * triggering a Spoof disposition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}
  */
  readonly isSimilarity: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}
  */
  readonly pattern: string;
}

export function emailSecurityTrustedDomainsBodyToTerraform(struct?: EmailSecurityTrustedDomainsBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    is_recent: cdktf.booleanToTerraform(struct!.isRecent),
    is_regex: cdktf.booleanToTerraform(struct!.isRegex),
    is_similarity: cdktf.booleanToTerraform(struct!.isSimilarity),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function emailSecurityTrustedDomainsBodyToHclTerraform(struct?: EmailSecurityTrustedDomainsBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_recent: {
      value: cdktf.booleanToHclTerraform(struct!.isRecent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_regex: {
      value: cdktf.booleanToHclTerraform(struct!.isRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_similarity: {
      value: cdktf.booleanToHclTerraform(struct!.isSimilarity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailSecurityTrustedDomainsBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmailSecurityTrustedDomainsBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._isRecent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRecent = this._isRecent;
    }
    if (this._isRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRegex = this._isRegex;
    }
    if (this._isSimilarity !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSimilarity = this._isSimilarity;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSecurityTrustedDomainsBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._isRecent = undefined;
      this._isRegex = undefined;
      this._isSimilarity = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._isRecent = value.isRecent;
      this._isRegex = value.isRegex;
      this._isSimilarity = value.isSimilarity;
      this._pattern = value.pattern;
    }
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // is_recent - computed: false, optional: false, required: true
  private _isRecent?: boolean | cdktf.IResolvable; 
  public get isRecent() {
    return this.getBooleanAttribute('is_recent');
  }
  public set isRecent(value: boolean | cdktf.IResolvable) {
    this._isRecent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecentInput() {
    return this._isRecent;
  }

  // is_regex - computed: false, optional: false, required: true
  private _isRegex?: boolean | cdktf.IResolvable; 
  public get isRegex() {
    return this.getBooleanAttribute('is_regex');
  }
  public set isRegex(value: boolean | cdktf.IResolvable) {
    this._isRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegexInput() {
    return this._isRegex;
  }

  // is_similarity - computed: false, optional: false, required: true
  private _isSimilarity?: boolean | cdktf.IResolvable; 
  public get isSimilarity() {
    return this.getBooleanAttribute('is_similarity');
  }
  public set isSimilarity(value: boolean | cdktf.IResolvable) {
    this._isSimilarity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSimilarityInput() {
    return this._isSimilarity;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class EmailSecurityTrustedDomainsBodyList extends cdktf.ComplexList {
  public internalValue? : EmailSecurityTrustedDomainsBody[] | cdktf.IResolvable

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
  public get(index: number): EmailSecurityTrustedDomainsBodyOutputReference {
    return new EmailSecurityTrustedDomainsBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
export class EmailSecurityTrustedDomains extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_trusted_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailSecurityTrustedDomains to import
  * @param importFromId The id of the existing EmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSecurityTrustedDomainsConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSecurityTrustedDomainsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_trusted_domains',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.9.0',
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
    this._body.internalValue = config.body;
    this._comments = config.comments;
    this._isRecent = config.isRecent;
    this._isRegex = config.isRegex;
    this._isSimilarity = config.isSimilarity;
    this._pattern = config.pattern;
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

  // body - computed: false, optional: true, required: false
  private _body = new EmailSecurityTrustedDomainsBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: EmailSecurityTrustedDomainsBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_recent - computed: false, optional: true, required: false
  private _isRecent?: boolean | cdktf.IResolvable; 
  public get isRecent() {
    return this.getBooleanAttribute('is_recent');
  }
  public set isRecent(value: boolean | cdktf.IResolvable) {
    this._isRecent = value;
  }
  public resetIsRecent() {
    this._isRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecentInput() {
    return this._isRecent;
  }

  // is_regex - computed: false, optional: true, required: false
  private _isRegex?: boolean | cdktf.IResolvable; 
  public get isRegex() {
    return this.getBooleanAttribute('is_regex');
  }
  public set isRegex(value: boolean | cdktf.IResolvable) {
    this._isRegex = value;
  }
  public resetIsRegex() {
    this._isRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegexInput() {
    return this._isRegex;
  }

  // is_similarity - computed: false, optional: true, required: false
  private _isSimilarity?: boolean | cdktf.IResolvable; 
  public get isSimilarity() {
    return this.getBooleanAttribute('is_similarity');
  }
  public set isSimilarity(value: boolean | cdktf.IResolvable) {
    this._isSimilarity = value;
  }
  public resetIsSimilarity() {
    this._isSimilarity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSimilarityInput() {
    return this._isSimilarity;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      body: cdktf.listMapper(emailSecurityTrustedDomainsBodyToTerraform, false)(this._body.internalValue),
      comments: cdktf.stringToTerraform(this._comments),
      is_recent: cdktf.booleanToTerraform(this._isRecent),
      is_regex: cdktf.booleanToTerraform(this._isRegex),
      is_similarity: cdktf.booleanToTerraform(this._isSimilarity),
      pattern: cdktf.stringToTerraform(this._pattern),
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
      body: {
        value: cdktf.listMapperHcl(emailSecurityTrustedDomainsBodyToHclTerraform, false)(this._body.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailSecurityTrustedDomainsBodyList",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_recent: {
        value: cdktf.booleanToHclTerraform(this._isRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_regex: {
        value: cdktf.booleanToHclTerraform(this._isRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_similarity: {
        value: cdktf.booleanToHclTerraform(this._isSimilarity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
