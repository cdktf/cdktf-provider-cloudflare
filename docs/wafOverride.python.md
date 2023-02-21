# `wafOverride` Submodule <a name="`wafOverride` Submodule" id="@cdktf/provider-cloudflare.wafOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafOverride <a name="WafOverride" id="@cdktf/provider-cloudflare.wafOverride.WafOverride"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override cloudflare_waf_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_override

wafOverride.WafOverride(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  urls: typing.List[str],
  zone_id: str,
  description: str = None,
  groups: typing.Mapping[str] = None,
  id: str = None,
  paused: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  rewrite_action: typing.Mapping[str] = None,
  rules: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.urls">urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.groups">groups</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rewriteAction">rewrite_action</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rules">rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.urls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#zone_id WafOverride#zone_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.groups"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.paused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}.

---

##### `rewrite_action`<sup>Optional</sup> <a name="rewrite_action" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rewriteAction"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.rules"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPaused">reset_paused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRewriteAction">reset_rewrite_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRules">reset_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_paused` <a name="reset_paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPaused"></a>

```python
def reset_paused() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_rewrite_action` <a name="reset_rewrite_action" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRewriteAction"></a>

```python
def reset_rewrite_action() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRules"></a>

```python
def reset_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_override

wafOverride.WafOverride.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_override

wafOverride.WafOverride.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_override

wafOverride.WafOverride.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.overrideId">override_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groupsInput">groups_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.pausedInput">paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteActionInput">rewrite_action_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rulesInput">rules_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urlsInput">urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groups">groups</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteAction">rewrite_action</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rules">rules</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urls">urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `override_id`<sup>Required</sup> <a name="override_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.overrideId"></a>

```python
override_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groupsInput"></a>

```python
groups_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.pausedInput"></a>

```python
paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rewrite_action_input`<sup>Optional</sup> <a name="rewrite_action_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteActionInput"></a>

```python
rewrite_action_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rulesInput"></a>

```python
rules_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `urls_input`<sup>Optional</sup> <a name="urls_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urlsInput"></a>

```python
urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groups"></a>

```python
groups: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rewrite_action`<sup>Required</sup> <a name="rewrite_action" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteAction"></a>

```python
rewrite_action: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rules"></a>

```python
rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafOverrideConfig <a name="WafOverrideConfig" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waf_override

wafOverride.WafOverrideConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  urls: typing.List[str],
  zone_id: str,
  description: str = None,
  groups: typing.Mapping[str] = None,
  id: str = None,
  paused: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  rewrite_action: typing.Mapping[str] = None,
  rules: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.urls">urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.groups">groups</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rewriteAction">rewrite_action</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rules">rules</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#zone_id WafOverride#zone_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.groups"></a>

```python
groups: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}.

---

##### `rewrite_action`<sup>Optional</sup> <a name="rewrite_action" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rewriteAction"></a>

```python
rewrite_action: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rules"></a>

```python
rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}.

---



