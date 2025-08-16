# `dataCloudflareMagicNetworkMonitoringRule` Submodule <a name="`dataCloudflareMagicNetworkMonitoringRule` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringRule <a name="DataCloudflareMagicNetworkMonitoringRule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_rule

dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule(
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
  rule_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | The id of the rule. Must be unique. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.ruleId"></a>

- *Type:* str

The id of the rule. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetRuleId">reset_rule_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_rule

dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_rule

dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_rule

dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_rule

dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.automaticAdvertisement">automatic_advertisement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.bandwidthThreshold">bandwidth_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.packetThreshold">packet_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixMatch">prefix_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreSensitivity">zscore_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreTarget">zscore_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `automatic_advertisement`<sup>Required</sup> <a name="automatic_advertisement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```python
automatic_advertisement: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bandwidth_threshold`<sup>Required</sup> <a name="bandwidth_threshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```python
bandwidth_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `packet_threshold`<sup>Required</sup> <a name="packet_threshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.packetThreshold"></a>

```python
packet_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_match`<sup>Required</sup> <a name="prefix_match" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixMatch"></a>

```python
prefix_match: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zscore_sensitivity`<sup>Required</sup> <a name="zscore_sensitivity" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```python
zscore_sensitivity: str
```

- *Type:* str

---

##### `zscore_target`<sup>Required</sup> <a name="zscore_target" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreTarget"></a>

```python
zscore_target: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringRuleConfig <a name="DataCloudflareMagicNetworkMonitoringRuleConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_network_monitoring_rule

dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  rule_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.ruleId">rule_id</a></code> | <code>str</code> | The id of the rule. Must be unique. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

The id of the rule. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}

---



