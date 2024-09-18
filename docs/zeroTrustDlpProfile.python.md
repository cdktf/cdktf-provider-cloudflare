# `zeroTrustDlpProfile` Submodule <a name="`zeroTrustDlpProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpProfile <a name="ZeroTrustDlpProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile cloudflare_zero_trust_dlp_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfile(
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
  allowed_match_count: typing.Union[int, float],
  entry: typing.Union[IResolvable, typing.List[ZeroTrustDlpProfileEntry]],
  name: str,
  type: str,
  context_awareness: ZeroTrustDlpProfileContextAwareness = None,
  description: str = None,
  id: str = None,
  ocr_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.entry">entry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]</code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.contextAwareness">context_awareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.ocrEnabled">ocr_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#account_id ZeroTrustDlpProfile#account_id}

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.allowedMatchCount"></a>

- *Type:* typing.Union[int, float]

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#allowed_match_count ZeroTrustDlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.entry"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#entry ZeroTrustDlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.name"></a>

- *Type:* str

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.type"></a>

- *Type:* str

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#type ZeroTrustDlpProfile#type}

---

##### `context_awareness`<sup>Optional</sup> <a name="context_awareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.contextAwareness"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#context_awareness ZeroTrustDlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.description"></a>

- *Type:* str

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#description ZeroTrustDlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocr_enabled`<sup>Optional</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.ocrEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#ocr_enabled ZeroTrustDlpProfile#ocr_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness">put_context_awareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry">put_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetContextAwareness">reset_context_awareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOcrEnabled">reset_ocr_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_context_awareness` <a name="put_context_awareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness"></a>

```python
def put_context_awareness(
  enabled: typing.Union[bool, IResolvable],
  skip: ZeroTrustDlpProfileContextAwarenessSkip
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

###### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness.parameter.skip"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#skip ZeroTrustDlpProfile#skip}

---

##### `put_entry` <a name="put_entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry"></a>

```python
def put_entry(
  value: typing.Union[IResolvable, typing.List[ZeroTrustDlpProfileEntry]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]

---

##### `reset_context_awareness` <a name="reset_context_awareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetContextAwareness"></a>

```python
def reset_context_awareness() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ocr_enabled` <a name="reset_ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOcrEnabled"></a>

```python
def reset_ocr_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDlpProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDlpProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDlpProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDlpProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwareness">context_awareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference">ZeroTrustDlpProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entry">entry</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList">ZeroTrustDlpProfileEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCountInput">allowed_match_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwarenessInput">context_awareness_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entryInput">entry_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabledInput">ocr_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabled">ocr_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `context_awareness`<sup>Required</sup> <a name="context_awareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwareness"></a>

```python
context_awareness: ZeroTrustDlpProfileContextAwarenessOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference">ZeroTrustDlpProfileContextAwarenessOutputReference</a>

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entry"></a>

```python
entry: ZeroTrustDlpProfileEntryList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList">ZeroTrustDlpProfileEntryList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_match_count_input`<sup>Optional</sup> <a name="allowed_match_count_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCountInput"></a>

```python
allowed_match_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `context_awareness_input`<sup>Optional</sup> <a name="context_awareness_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwarenessInput"></a>

```python
context_awareness_input: ZeroTrustDlpProfileContextAwareness
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entry_input`<sup>Optional</sup> <a name="entry_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entryInput"></a>

```python
entry_input: typing.Union[IResolvable, typing.List[ZeroTrustDlpProfileEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ocr_enabled_input`<sup>Optional</sup> <a name="ocr_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabledInput"></a>

```python
ocr_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCount"></a>

```python
allowed_match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocr_enabled`<sup>Required</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabled"></a>

```python
ocr_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpProfileConfig <a name="ZeroTrustDlpProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  allowed_match_count: typing.Union[int, float],
  entry: typing.Union[IResolvable, typing.List[ZeroTrustDlpProfileEntry]],
  name: str,
  type: str,
  context_awareness: ZeroTrustDlpProfileContextAwareness = None,
  description: str = None,
  id: str = None,
  ocr_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.entry">entry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]</code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.name">name</a></code> | <code>str</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.type">type</a></code> | <code>str</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.contextAwareness">context_awareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.description">description</a></code> | <code>str</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.ocrEnabled">ocr_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#account_id ZeroTrustDlpProfile#account_id}

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.allowedMatchCount"></a>

```python
allowed_match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#allowed_match_count ZeroTrustDlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.entry"></a>

```python
entry: typing.Union[IResolvable, typing.List[ZeroTrustDlpProfileEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#entry ZeroTrustDlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#type ZeroTrustDlpProfile#type}

---

##### `context_awareness`<sup>Optional</sup> <a name="context_awareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.contextAwareness"></a>

```python
context_awareness: ZeroTrustDlpProfileContextAwareness
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#context_awareness ZeroTrustDlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#description ZeroTrustDlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocr_enabled`<sup>Optional</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.ocrEnabled"></a>

```python
ocr_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#ocr_enabled ZeroTrustDlpProfile#ocr_enabled}

---

### ZeroTrustDlpProfileContextAwareness <a name="ZeroTrustDlpProfileContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness(
  enabled: typing.Union[bool, IResolvable],
  skip: ZeroTrustDlpProfileContextAwarenessSkip
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | skip block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.skip"></a>

```python
skip: ZeroTrustDlpProfileContextAwarenessSkip
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#skip ZeroTrustDlpProfile#skip}

---

### ZeroTrustDlpProfileContextAwarenessSkip <a name="ZeroTrustDlpProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip(
  files: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.property.files">files</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Return all matches, regardless of context analysis result, if the data is a file. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.property.files"></a>

```python
files: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#files ZeroTrustDlpProfile#files}

---

### ZeroTrustDlpProfileEntry <a name="ZeroTrustDlpProfileEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileEntry(
  name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  pattern: ZeroTrustDlpProfileEntryPattern = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.name">name</a></code> | <code>str</code> | Name of the entry to deploy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the entry is active. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.id">id</a></code> | <code>str</code> | Unique entry identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | pattern block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the entry to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the entry is active. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.id"></a>

```python
id: str
```

- *Type:* str

Unique entry identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.pattern"></a>

```python
pattern: ZeroTrustDlpProfileEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#pattern ZeroTrustDlpProfile#pattern}

---

### ZeroTrustDlpProfileEntryPattern <a name="ZeroTrustDlpProfileEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern(
  regex: str,
  validation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.regex">regex</a></code> | <code>str</code> | The regex that defines the pattern. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.validation">validation</a></code> | <code>str</code> | The validation algorithm to apply with this pattern. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.regex"></a>

```python
regex: str
```

- *Type:* str

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#regex ZeroTrustDlpProfile#regex}

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.validation"></a>

```python
validation: str
```

- *Type:* str

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#validation ZeroTrustDlpProfile#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpProfileContextAwarenessOutputReference <a name="ZeroTrustDlpProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip">put_skip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_skip` <a name="put_skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip"></a>

```python
def put_skip(
  files: typing.Union[bool, IResolvable]
) -> None
```

###### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip.parameter.files"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#files ZeroTrustDlpProfile#files}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference">ZeroTrustDlpProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skipInput">skip_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skip"></a>

```python
skip: ZeroTrustDlpProfileContextAwarenessSkipOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference">ZeroTrustDlpProfileContextAwarenessSkipOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_input`<sup>Optional</sup> <a name="skip_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skipInput"></a>

```python
skip_input: ZeroTrustDlpProfileContextAwarenessSkip
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpProfileContextAwareness
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---


### ZeroTrustDlpProfileContextAwarenessSkipOutputReference <a name="ZeroTrustDlpProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.files"></a>

```python
files: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpProfileContextAwarenessSkip
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---


### ZeroTrustDlpProfileEntryList <a name="ZeroTrustDlpProfileEntryList" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustDlpProfileEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustDlpProfileEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]]

---


### ZeroTrustDlpProfileEntryOutputReference <a name="ZeroTrustDlpProfileEntryOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern">put_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pattern` <a name="put_pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern"></a>

```python
def put_pattern(
  regex: str,
  validation: str = None
) -> None
```

###### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern.parameter.regex"></a>

- *Type:* str

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#regex ZeroTrustDlpProfile#regex}

---

###### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern.parameter.validation"></a>

- *Type:* str

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_dlp_profile#validation ZeroTrustDlpProfile#validation}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference">ZeroTrustDlpProfileEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.patternInput">pattern_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.pattern"></a>

```python
pattern: ZeroTrustDlpProfileEntryPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference">ZeroTrustDlpProfileEntryPatternOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.patternInput"></a>

```python
pattern_input: ZeroTrustDlpProfileEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustDlpProfileEntry]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>]

---


### ZeroTrustDlpProfileEntryPatternOutputReference <a name="ZeroTrustDlpProfileEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_profile

zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resetValidation">reset_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_validation` <a name="reset_validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resetValidation"></a>

```python
def reset_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validationInput">validation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validation">validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validationInput"></a>

```python
validation_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validation"></a>

```python
validation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpProfileEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---



