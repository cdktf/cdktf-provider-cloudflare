# `emailSecurityTrustedDomains` Submodule <a name="`emailSecurityTrustedDomains` Submodule" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityTrustedDomains <a name="EmailSecurityTrustedDomains" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomains(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  body: typing.Union[IResolvable, typing.List[EmailSecurityTrustedDomainsBody]] = None,
  comments: str = None,
  is_recent: typing.Union[bool, IResolvable] = None,
  is_regex: typing.Union[bool, IResolvable] = None,
  is_similarity: typing.Union[bool, IResolvable] = None,
  pattern: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.body">body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.comments">comments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.isRecent">is_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.isRegex">is_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.isSimilarity">is_similarity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.accountId"></a>

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.body"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.comments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

##### `is_recent`<sup>Optional</sup> <a name="is_recent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.isRecent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `is_regex`<sup>Optional</sup> <a name="is_regex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.isRegex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `is_similarity`<sup>Optional</sup> <a name="is_similarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.isSimilarity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.pattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments">reset_comments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent">reset_is_recent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex">reset_is_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity">reset_is_similarity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetPattern">reset_pattern</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_body` <a name="put_body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody"></a>

```python
def put_body(
  value: typing.Union[IResolvable, typing.List[EmailSecurityTrustedDomainsBody]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_comments` <a name="reset_comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments"></a>

```python
def reset_comments() -> None
```

##### `reset_is_recent` <a name="reset_is_recent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent"></a>

```python
def reset_is_recent() -> None
```

##### `reset_is_regex` <a name="reset_is_regex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex"></a>

```python
def reset_is_regex() -> None
```

##### `reset_is_similarity` <a name="reset_is_similarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity"></a>

```python
def reset_is_similarity() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetPattern"></a>

```python
def reset_pattern() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmailSecurityTrustedDomains to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmailSecurityTrustedDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.body">body</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList">EmailSecurityTrustedDomainsBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.bodyInput">body_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput">comments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput">is_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput">is_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput">is_similarity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent">is_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex">is_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity">is_similarity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.body"></a>

```python
body: EmailSecurityTrustedDomainsBodyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList">EmailSecurityTrustedDomainsBodyList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.bodyInput"></a>

```python
body_input: typing.Union[IResolvable, typing.List[EmailSecurityTrustedDomainsBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]

---

##### `comments_input`<sup>Optional</sup> <a name="comments_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput"></a>

```python
comments_input: str
```

- *Type:* str

---

##### `is_recent_input`<sup>Optional</sup> <a name="is_recent_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput"></a>

```python
is_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_regex_input`<sup>Optional</sup> <a name="is_regex_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput"></a>

```python
is_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_similarity_input`<sup>Optional</sup> <a name="is_similarity_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput"></a>

```python
is_similarity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `is_recent`<sup>Required</sup> <a name="is_recent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent"></a>

```python
is_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex"></a>

```python
is_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_similarity`<sup>Required</sup> <a name="is_similarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity"></a>

```python
is_similarity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityTrustedDomainsBody <a name="EmailSecurityTrustedDomainsBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody(
  is_recent: typing.Union[bool, IResolvable],
  is_regex: typing.Union[bool, IResolvable],
  is_similarity: typing.Union[bool, IResolvable],
  pattern: str,
  comments: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRecent">is_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRegex">is_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isSimilarity">is_similarity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.comments">comments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |

---

##### `is_recent`<sup>Required</sup> <a name="is_recent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRecent"></a>

```python
is_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRegex"></a>

```python
is_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `is_similarity`<sup>Required</sup> <a name="is_similarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isSimilarity"></a>

```python
is_similarity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.comments"></a>

```python
comments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

### EmailSecurityTrustedDomainsConfig <a name="EmailSecurityTrustedDomainsConfig" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  body: typing.Union[IResolvable, typing.List[EmailSecurityTrustedDomainsBody]] = None,
  comments: str = None,
  is_recent: typing.Union[bool, IResolvable] = None,
  is_regex: typing.Union[bool, IResolvable] = None,
  is_similarity: typing.Union[bool, IResolvable] = None,
  pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId">account_id</a></code> | <code>str</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.body">body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments">comments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent">is_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex">is_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity">is_similarity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.body"></a>

```python
body: typing.Union[IResolvable, typing.List[EmailSecurityTrustedDomainsBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments"></a>

```python
comments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

##### `is_recent`<sup>Optional</sup> <a name="is_recent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent"></a>

```python
is_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `is_regex`<sup>Optional</sup> <a name="is_regex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex"></a>

```python
is_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `is_similarity`<sup>Optional</sup> <a name="is_similarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity"></a>

```python
is_similarity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityTrustedDomainsBodyList <a name="EmailSecurityTrustedDomainsBodyList" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmailSecurityTrustedDomainsBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmailSecurityTrustedDomainsBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]]

---


### EmailSecurityTrustedDomainsBodyOutputReference <a name="EmailSecurityTrustedDomainsBodyOutputReference" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import email_security_trusted_domains

emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resetComments">reset_comments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comments` <a name="reset_comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resetComments"></a>

```python
def reset_comments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.commentsInput">comments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecentInput">is_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegexInput">is_regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarityInput">is_similarity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecent">is_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegex">is_regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarity">is_similarity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comments_input`<sup>Optional</sup> <a name="comments_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.commentsInput"></a>

```python
comments_input: str
```

- *Type:* str

---

##### `is_recent_input`<sup>Optional</sup> <a name="is_recent_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecentInput"></a>

```python
is_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_regex_input`<sup>Optional</sup> <a name="is_regex_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegexInput"></a>

```python
is_regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_similarity_input`<sup>Optional</sup> <a name="is_similarity_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarityInput"></a>

```python
is_similarity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `is_recent`<sup>Required</sup> <a name="is_recent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecent"></a>

```python
is_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_regex`<sup>Required</sup> <a name="is_regex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegex"></a>

```python
is_regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_similarity`<sup>Required</sup> <a name="is_similarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarity"></a>

```python
is_similarity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EmailSecurityTrustedDomainsBody]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>]

---



