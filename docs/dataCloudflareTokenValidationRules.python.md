# `dataCloudflareTokenValidationRules` Submodule <a name="`dataCloudflareTokenValidationRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTokenValidationRules <a name="DataCloudflareTokenValidationRules" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules cloudflare_token_validation_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  filter: DataCloudflareTokenValidationRulesFilter = None,
  rule_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#filter DataCloudflareTokenValidationRules#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#zone_id DataCloudflareTokenValidationRules#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#filter DataCloudflareTokenValidationRules#filter}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.Initializer.parameter.ruleId"></a>

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#rule_id DataCloudflareTokenValidationRules#rule_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.resetRuleId">reset_rule_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter"></a>

```python
def put_filter(
  action: str = None,
  enabled: bool | IResolvable = None,
  host: str = None,
  hostname: str = None,
  id: str = None,
  rule_id: str = None,
  token_configuration: typing.List[str] = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.action"></a>

- *Type:* str

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#action DataCloudflareTokenValidationRules#action}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#enabled DataCloudflareTokenValidationRules#enabled}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.host"></a>

- *Type:* str

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#host DataCloudflareTokenValidationRules#host}

---

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.hostname"></a>

- *Type:* str

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#hostname DataCloudflareTokenValidationRules#hostname}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.id"></a>

- *Type:* str

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#id DataCloudflareTokenValidationRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.ruleId"></a>

- *Type:* str

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#rule_id DataCloudflareTokenValidationRules#rule_id}

---

###### `token_configuration`<sup>Optional</sup> <a name="token_configuration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.putFilter.parameter.tokenConfiguration"></a>

- *Type:* typing.List[str]

Select rules using any of these token configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#token_configuration DataCloudflareTokenValidationRules#token_configuration}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareTokenValidationRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareTokenValidationRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareTokenValidationRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareTokenValidationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTokenValidationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference">DataCloudflareTokenValidationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference">DataCloudflareTokenValidationRulesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.filter"></a>

```python
filter: DataCloudflareTokenValidationRulesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference">DataCloudflareTokenValidationRulesFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.selector"></a>

```python
selector: DataCloudflareTokenValidationRulesSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference">DataCloudflareTokenValidationRulesSelectorOutputReference</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareTokenValidationRulesFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a>

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTokenValidationRulesConfig <a name="DataCloudflareTokenValidationRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  filter: DataCloudflareTokenValidationRulesFilter = None,
  rule_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#filter DataCloudflareTokenValidationRules#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.ruleId">rule_id</a></code> | <code>str</code> | UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#zone_id DataCloudflareTokenValidationRules#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.filter"></a>

```python
filter: DataCloudflareTokenValidationRulesFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#filter DataCloudflareTokenValidationRules#filter}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesConfig.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#rule_id DataCloudflareTokenValidationRules#rule_id}

---

### DataCloudflareTokenValidationRulesFilter <a name="DataCloudflareTokenValidationRulesFilter" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter(
  action: str = None,
  enabled: bool | IResolvable = None,
  host: str = None,
  hostname: str = None,
  id: str = None,
  rule_id: str = None,
  token_configuration: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.action">action</a></code> | <code>str</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.host">host</a></code> | <code>str</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.hostname">hostname</a></code> | <code>str</code> | Select rules with this host in `include`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.id">id</a></code> | <code>str</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.ruleId">rule_id</a></code> | <code>str</code> | Select rules with these IDs. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.tokenConfiguration">token_configuration</a></code> | <code>typing.List[str]</code> | Select rules using any of these token configurations. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.action"></a>

```python
action: str
```

- *Type:* str

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#action DataCloudflareTokenValidationRules#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#enabled DataCloudflareTokenValidationRules#enabled}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.host"></a>

```python
host: str
```

- *Type:* str

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#host DataCloudflareTokenValidationRules#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Select rules with this host in `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#hostname DataCloudflareTokenValidationRules#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.id"></a>

```python
id: str
```

- *Type:* str

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#id DataCloudflareTokenValidationRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Select rules with these IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#rule_id DataCloudflareTokenValidationRules#rule_id}

---

##### `token_configuration`<sup>Optional</sup> <a name="token_configuration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter.property.tokenConfiguration"></a>

```python
token_configuration: typing.List[str]
```

- *Type:* typing.List[str]

Select rules using any of these token configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_rules#token_configuration DataCloudflareTokenValidationRules#token_configuration}

---

### DataCloudflareTokenValidationRulesSelector <a name="DataCloudflareTokenValidationRulesSelector" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelector()
```


### DataCloudflareTokenValidationRulesSelectorExclude <a name="DataCloudflareTokenValidationRulesSelectorExclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExclude()
```


### DataCloudflareTokenValidationRulesSelectorInclude <a name="DataCloudflareTokenValidationRulesSelectorInclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorInclude()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTokenValidationRulesFilterOutputReference <a name="DataCloudflareTokenValidationRulesFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetTokenConfiguration">reset_token_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_token_configuration` <a name="reset_token_configuration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.resetTokenConfiguration"></a>

```python
def reset_token_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.tokenConfigurationInput">token_configuration_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.tokenConfiguration">token_configuration</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `token_configuration_input`<sup>Optional</sup> <a name="token_configuration_input" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.tokenConfigurationInput"></a>

```python
token_configuration_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `token_configuration`<sup>Required</sup> <a name="token_configuration" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.tokenConfiguration"></a>

```python
token_configuration: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareTokenValidationRulesFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesFilter">DataCloudflareTokenValidationRulesFilter</a>

---


### DataCloudflareTokenValidationRulesSelectorExcludeList <a name="DataCloudflareTokenValidationRulesSelectorExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareTokenValidationRulesSelectorExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareTokenValidationRulesSelectorExcludeOutputReference <a name="DataCloudflareTokenValidationRulesSelectorExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.operationIds">operation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExclude">DataCloudflareTokenValidationRulesSelectorExclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_ids`<sup>Required</sup> <a name="operation_ids" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.operationIds"></a>

```python
operation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareTokenValidationRulesSelectorExclude
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExclude">DataCloudflareTokenValidationRulesSelectorExclude</a>

---


### DataCloudflareTokenValidationRulesSelectorIncludeList <a name="DataCloudflareTokenValidationRulesSelectorIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareTokenValidationRulesSelectorIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareTokenValidationRulesSelectorIncludeOutputReference <a name="DataCloudflareTokenValidationRulesSelectorIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.host">host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorInclude">DataCloudflareTokenValidationRulesSelectorInclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.host"></a>

```python
host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareTokenValidationRulesSelectorInclude
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorInclude">DataCloudflareTokenValidationRulesSelectorInclude</a>

---


### DataCloudflareTokenValidationRulesSelectorOutputReference <a name="DataCloudflareTokenValidationRulesSelectorOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_token_validation_rules

dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList">DataCloudflareTokenValidationRulesSelectorExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList">DataCloudflareTokenValidationRulesSelectorIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelector">DataCloudflareTokenValidationRulesSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.exclude"></a>

```python
exclude: DataCloudflareTokenValidationRulesSelectorExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorExcludeList">DataCloudflareTokenValidationRulesSelectorExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.include"></a>

```python
include: DataCloudflareTokenValidationRulesSelectorIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorIncludeList">DataCloudflareTokenValidationRulesSelectorIncludeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelectorOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareTokenValidationRulesSelector
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationRules.DataCloudflareTokenValidationRulesSelector">DataCloudflareTokenValidationRulesSelector</a>

---



