# `dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback <a name="DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profile_local_domain_fallback

dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback(
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
  policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#account_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#policy_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#account_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#policy_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profile_local_domain_fallback

dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profile_local_domain_fallback

dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profile_local_domain_fallback

dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profile_local_domain_fallback

dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig <a name="DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_device_custom_profile_local_domain_fallback

dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#account_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#policy_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#account_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#policy_id DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}.

---



