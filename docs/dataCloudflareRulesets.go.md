# `data_cloudflare_rulesets`

Refer to the Terraform Registory for docs: [`data_cloudflare_rulesets`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets).

# `dataCloudflareRulesets` Submodule <a name="`dataCloudflareRulesets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareRulesets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRulesets <a name="DataCloudflareRulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets cloudflare_rulesets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesets(scope Construct, id *string, config DataCloudflareRulesetsConfig) DataCloudflareRulesets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig">DataCloudflareRulesetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig">DataCloudflareRulesetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetIncludeRules">ResetIncludeRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter"></a>

```go
func PutFilter(value DataCloudflareRulesetsFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeRules` <a name="ResetIncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetIncludeRules"></a>

```go
func ResetIncludeRules()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.DataCloudflareRulesets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.DataCloudflareRulesets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.DataCloudflareRulesets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference">DataCloudflareRulesetsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.rulesets">Rulesets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList">DataCloudflareRulesetsRulesetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRulesInput">IncludeRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRules">IncludeRules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filter"></a>

```go
func Filter() DataCloudflareRulesetsFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference">DataCloudflareRulesetsFilterOutputReference</a>

---

##### `Rulesets`<sup>Required</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.rulesets"></a>

```go
func Rulesets() DataCloudflareRulesetsRulesetsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList">DataCloudflareRulesetsRulesetsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filterInput"></a>

```go
func FilterInput() DataCloudflareRulesetsFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeRulesInput`<sup>Optional</sup> <a name="IncludeRulesInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRulesInput"></a>

```go
func IncludeRulesInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeRules`<sup>Required</sup> <a name="IncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRules"></a>

```go
func IncludeRules() interface{}
```

- *Type:* interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRulesetsConfig <a name="DataCloudflareRulesetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter,
	Id: *string,
	IncludeRules: interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.includeRules">IncludeRules</a></code> | <code>interface{}</code> | Include rule data in response. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#account_id DataCloudflareRulesets#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.filter"></a>

```go
Filter DataCloudflareRulesetsFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#filter DataCloudflareRulesets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeRules`<sup>Optional</sup> <a name="IncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.includeRules"></a>

```go
IncludeRules interface{}
```

- *Type:* interface{}

Include rule data in response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#include_rules DataCloudflareRulesets#include_rules}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#zone_id DataCloudflareRulesets#zone_id}

---

### DataCloudflareRulesetsFilter <a name="DataCloudflareRulesetsFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsFilter {
	Id: *string,
	Kind: *string,
	Name: *string,
	Phase: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.id">Id</a></code> | <code>*string</code> | The ID of the Ruleset to target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.kind">Kind</a></code> | <code>*string</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.name">Name</a></code> | <code>*string</code> | Name of the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.phase">Phase</a></code> | <code>*string</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.version">Version</a></code> | <code>*string</code> | Version of the ruleset to filter on. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Ruleset to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#kind DataCloudflareRulesets#kind}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#name DataCloudflareRulesets#name}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.phase"></a>

```go
Phase *string
```

- *Type:* *string

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `http_response_compression`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#phase DataCloudflareRulesets#phase}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the ruleset to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/data-sources/rulesets#version DataCloudflareRulesets#version}

---

### DataCloudflareRulesetsRulesets <a name="DataCloudflareRulesetsRulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesets {

}
```


### DataCloudflareRulesetsRulesetsRules <a name="DataCloudflareRulesetsRulesetsRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRules {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParameters <a name="DataCloudflareRulesetsRulesetsRulesActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParameters {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominify <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValue <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersHeaders <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOrigin <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverrides <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersResponse <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponse" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStale <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersSni <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSni" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUri <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUri" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPath <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath {

}
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery {

}
```


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck {

}
```


### DataCloudflareRulesetsRulesetsRulesLogging <a name="DataCloudflareRulesetsRulesetsRulesLogging" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesLogging {

}
```


### DataCloudflareRulesetsRulesetsRulesRatelimit <a name="DataCloudflareRulesetsRulesetsRulesRatelimit" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

&datacloudflarerulesets.DataCloudflareRulesetsRulesetsRulesRatelimit {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRulesetsFilterOutputReference <a name="DataCloudflareRulesetsFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareRulesetsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetKind"></a>

```go
func ResetKind()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetPhase"></a>

```go
func ResetPhase()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phaseInput">PhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phaseInput"></a>

```go
func PhaseInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---


### DataCloudflareRulesetsRulesetsList <a name="DataCloudflareRulesetsRulesetsList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsOutputReference <a name="DataCloudflareRulesetsRulesetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList">DataCloudflareRulesetsRulesetsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets">DataCloudflareRulesetsRulesets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.rules"></a>

```go
func Rules() DataCloudflareRulesetsRulesetsRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList">DataCloudflareRulesetsRulesetsRulesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets">DataCloudflareRulesetsRulesets</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.css">Css</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.html">Html</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.js">Js</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify">DataCloudflareRulesetsRulesetsRulesActionParametersAutominify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.css"></a>

```go
func Css() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.html"></a>

```go
func Html() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.js"></a>

```go
func Js() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersAutominify
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify">DataCloudflareRulesetsRulesetsRulesActionParametersAutominify</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.default">Default</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```go
func Default() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```go
func CheckPresence() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">ExcludeOrigin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```go
func CheckPresence() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeOrigin`<sup>Required</sup> <a name="ExcludeOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```go
func ExcludeOrigin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">Resolved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resolved`<sup>Required</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```go
func Resolved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cookie`<sup>Required</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```go
func Cookie() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```go
func Header() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```go
func Host() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```go
func QueryString() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```go
func User() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">DeviceType</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">Geo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">Lang</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```go
func DeviceType() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```go
func Geo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```go
func Lang() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.customKey">CustomKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">IgnoreQueryStringsOrder</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheByDeviceType`<sup>Required</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```go
func CacheByDeviceType() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CacheDeceptionArmor`<sup>Required</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```go
func CacheDeceptionArmor() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```go
func CustomKey() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList</a>

---

##### `IgnoreQueryStringsOrder`<sup>Required</sup> <a name="IgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```go
func IgnoreQueryStringsOrder() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.default">Default</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">StatusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```go
func Default() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `StatusCodeTtl`<sup>Required</sup> <a name="StatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```go
func StatusCodeTtl() DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">StatusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `StatusCodeRange`<sup>Required</sup> <a name="StatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```go
func StatusCodeRange() DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">From</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">To</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```go
func From() *f64
```

- *Type:* *f64

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```go
func To() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersFromValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.targetUrl">TargetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue">DataCloudflareRulesetsRulesetsRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```go
func PreserveQueryString() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```go
func TargetUrl() DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue">DataCloudflareRulesetsRulesetsRulesActionParametersFromValue</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders">DataCloudflareRulesetsRulesetsRulesActionParametersHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersHeaders
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders">DataCloudflareRulesetsRulesetsRulesActionParametersHeaders</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOriginList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOriginList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOriginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOriginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin">DataCloudflareRulesetsRulesetsRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin">DataCloudflareRulesetsRulesetsRulesActionParametersOrigin</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.autominify">Autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList">DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.bic">Bic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.browserTtl">BrowserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cache">Cache</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheKey">CacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cookieFields">CookieFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableApps">DisableApps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableRailgun">DisableRailgun</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableZaraz">DisableZaraz</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.edgeTtl">EdgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromList">FromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromValue">FromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList">DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hostHeader">HostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.increment">Increment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.matchedData">MatchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.mirage">Mirage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList">DataCloudflareRulesetsRulesetsRulesActionParametersOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originErrorPagePassthru">OriginErrorPagePassthru</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.phases">Phases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.polish">Polish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.requestFields">RequestFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.respectStrongEtags">RespectStrongEtags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.response">Response</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList">DataCloudflareRulesetsRulesetsRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.responseFields">ResponseFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rules">Rules</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ruleset">Ruleset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rulesets">Rulesets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serverSideExcludes">ServerSideExcludes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serveStale">ServeStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList">DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sni">Sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList">DataCloudflareRulesetsRulesetsRulesActionParametersSniList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ssl">Ssl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sxg">Sxg</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.uri">Uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList">DataCloudflareRulesetsRulesetsRulesActionParametersUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters">DataCloudflareRulesetsRulesetsRulesActionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```go
func AutomaticHttpsRewrites() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Autominify`<sup>Required</sup> <a name="Autominify" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.autominify"></a>

```go
func Autominify() DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList">DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList</a>

---

##### `Bic`<sup>Required</sup> <a name="Bic" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.bic"></a>

```go
func Bic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BrowserTtl`<sup>Required</sup> <a name="BrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.browserTtl"></a>

```go
func BrowserTtl() DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList</a>

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cache"></a>

```go
func Cache() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CacheKey`<sup>Required</sup> <a name="CacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheKey"></a>

```go
func CacheKey() DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CookieFields`<sup>Required</sup> <a name="CookieFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cookieFields"></a>

```go
func CookieFields() *[]*string
```

- *Type:* *[]*string

---

##### `DisableApps`<sup>Required</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableApps"></a>

```go
func DisableApps() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisableRailgun`<sup>Required</sup> <a name="DisableRailgun" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableRailgun"></a>

```go
func DisableRailgun() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisableZaraz`<sup>Required</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableZaraz"></a>

```go
func DisableZaraz() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EdgeTtl`<sup>Required</sup> <a name="EdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.edgeTtl"></a>

```go
func EdgeTtl() DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList</a>

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.emailObfuscation"></a>

```go
func EmailObfuscation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FromList`<sup>Required</sup> <a name="FromList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromList"></a>

```go
func FromList() DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList</a>

---

##### `FromValue`<sup>Required</sup> <a name="FromValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromValue"></a>

```go
func FromValue() DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.headers"></a>

```go
func Headers() DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList">DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList</a>

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hostHeader"></a>

```go
func HostHeader() *string
```

- *Type:* *string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```go
func HotlinkProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Increment`<sup>Required</sup> <a name="Increment" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.increment"></a>

```go
func Increment() *f64
```

- *Type:* *f64

---

##### `MatchedData`<sup>Required</sup> <a name="MatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.matchedData"></a>

```go
func MatchedData() DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList</a>

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.mirage"></a>

```go
func Mirage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```go
func OpportunisticEncryption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.origin"></a>

```go
func Origin() DataCloudflareRulesetsRulesetsRulesActionParametersOriginList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList">DataCloudflareRulesetsRulesetsRulesActionParametersOriginList</a>

---

##### `OriginErrorPagePassthru`<sup>Required</sup> <a name="OriginErrorPagePassthru" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```go
func OriginErrorPagePassthru() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.overrides"></a>

```go
func Overrides() DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList</a>

---

##### `Phases`<sup>Required</sup> <a name="Phases" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.phases"></a>

```go
func Phases() *[]*string
```

- *Type:* *[]*string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.polish"></a>

```go
func Polish() *string
```

- *Type:* *string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `RequestFields`<sup>Required</sup> <a name="RequestFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.requestFields"></a>

```go
func RequestFields() *[]*string
```

- *Type:* *[]*string

---

##### `RespectStrongEtags`<sup>Required</sup> <a name="RespectStrongEtags" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```go
func RespectStrongEtags() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.response"></a>

```go
func Response() DataCloudflareRulesetsRulesetsRulesActionParametersResponseList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList">DataCloudflareRulesetsRulesetsRulesActionParametersResponseList</a>

---

##### `ResponseFields`<sup>Required</sup> <a name="ResponseFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.responseFields"></a>

```go
func ResponseFields() *[]*string
```

- *Type:* *[]*string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rocketLoader"></a>

```go
func RocketLoader() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rules"></a>

```go
func Rules() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ruleset"></a>

```go
func Ruleset() *string
```

- *Type:* *string

---

##### `Rulesets`<sup>Required</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rulesets"></a>

```go
func Rulesets() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `ServerSideExcludes`<sup>Required</sup> <a name="ServerSideExcludes" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```go
func ServerSideExcludes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServeStale`<sup>Required</sup> <a name="ServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serveStale"></a>

```go
func ServeStale() DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList">DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList</a>

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sni"></a>

```go
func Sni() DataCloudflareRulesetsRulesetsRulesActionParametersSniList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList">DataCloudflareRulesetsRulesetsRulesActionParametersSniList</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ssl"></a>

```go
func Ssl() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `Sxg`<sup>Required</sup> <a name="Sxg" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sxg"></a>

```go
func Sxg() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.uri"></a>

```go
func Uri() DataCloudflareRulesetsRulesetsRulesActionParametersUriList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList">DataCloudflareRulesetsRulesetsRulesActionParametersUriList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters">DataCloudflareRulesetsRulesetsRulesActionParameters</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.categories">Categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides">DataCloudflareRulesetsRulesetsRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.categories"></a>

```go
func Categories() DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.rules"></a>

```go
func Rules() DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList</a>

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```go
func SensitivityLevel() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides">DataCloudflareRulesetsRulesetsRulesActionParametersOverrides</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```go
func ScoreThreshold() *f64
```

- *Type:* *f64

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```go
func SensitivityLevel() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersResponseList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse">DataCloudflareRulesetsRulesetsRulesActionParametersResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse">DataCloudflareRulesetsRulesetsRulesActionParametersResponse</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">DisableStaleWhileUpdating</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale">DataCloudflareRulesetsRulesetsRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableStaleWhileUpdating`<sup>Required</sup> <a name="DisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```go
func DisableStaleWhileUpdating() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale">DataCloudflareRulesetsRulesetsRulesActionParametersServeStale</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersSniList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSniList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersSniList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersSniList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni">DataCloudflareRulesetsRulesetsRulesActionParametersSni</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni">DataCloudflareRulesetsRulesetsRulesActionParametersSni</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.origin">Origin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList">DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList">DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri">DataCloudflareRulesetsRulesetsRulesActionParametersUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.origin"></a>

```go
func Origin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.path"></a>

```go
func Path() DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList">DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.query"></a>

```go
func Query() DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList">DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri">DataCloudflareRulesetsRulesetsRulesActionParametersUri</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersUriPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath">DataCloudflareRulesetsRulesetsRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath">DataCloudflareRulesetsRulesetsRulesActionParametersUriPath</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery">DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery">DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery</a>

---


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.passwordExpression">PasswordExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.usernameExpression">UsernameExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordExpression`<sup>Required</sup> <a name="PasswordExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```go
func PasswordExpression() *string
```

- *Type:* *string

---

##### `UsernameExpression`<sup>Required</sup> <a name="UsernameExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```go
func UsernameExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck</a>

---


### DataCloudflareRulesetsRulesetsRulesList <a name="DataCloudflareRulesetsRulesetsRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesLoggingList <a name="DataCloudflareRulesetsRulesetsRulesLoggingList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesLoggingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesLoggingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesLoggingOutputReference <a name="DataCloudflareRulesetsRulesetsRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging">DataCloudflareRulesetsRulesetsRulesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging">DataCloudflareRulesetsRulesetsRulesLogging</a>

---


### DataCloudflareRulesetsRulesetsRulesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.actionParameters">ActionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList">DataCloudflareRulesetsRulesetsRulesActionParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.exposedCredentialCheck">ExposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList">DataCloudflareRulesetsRulesetsRulesLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ratelimit">Ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList">DataCloudflareRulesetsRulesetsRulesRatelimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules">DataCloudflareRulesetsRulesetsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionParameters`<sup>Required</sup> <a name="ActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.actionParameters"></a>

```go
func ActionParameters() DataCloudflareRulesetsRulesetsRulesActionParametersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList">DataCloudflareRulesetsRulesetsRulesActionParametersList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExposedCredentialCheck`<sup>Required</sup> <a name="ExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.exposedCredentialCheck"></a>

```go
func ExposedCredentialCheck() DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList</a>

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.logging"></a>

```go
func Logging() DataCloudflareRulesetsRulesetsRulesLoggingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList">DataCloudflareRulesetsRulesetsRulesLoggingList</a>

---

##### `Ratelimit`<sup>Required</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ratelimit"></a>

```go
func Ratelimit() DataCloudflareRulesetsRulesetsRulesRatelimitList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList">DataCloudflareRulesetsRulesetsRulesRatelimitList</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules">DataCloudflareRulesetsRulesetsRules</a>

---


### DataCloudflareRulesetsRulesetsRulesRatelimitList <a name="DataCloudflareRulesetsRulesetsRulesRatelimitList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesRatelimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareRulesetsRulesetsRulesRatelimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get"></a>

```go
func Get(index *f64) DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference <a name="DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarerulesets"

datacloudflarerulesets.NewDataCloudflareRulesetsRulesetsRulesRatelimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.characteristics">Characteristics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.countingExpression">CountingExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.mitigationTimeout">MitigationTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsPerPeriod">RequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsToOrigin">RequestsToOrigin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scorePerPeriod">ScorePerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scoreResponseHeaderName">ScoreResponseHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit">DataCloudflareRulesetsRulesetsRulesRatelimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Characteristics`<sup>Required</sup> <a name="Characteristics" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.characteristics"></a>

```go
func Characteristics() *[]*string
```

- *Type:* *[]*string

---

##### `CountingExpression`<sup>Required</sup> <a name="CountingExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.countingExpression"></a>

```go
func CountingExpression() *string
```

- *Type:* *string

---

##### `MitigationTimeout`<sup>Required</sup> <a name="MitigationTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```go
func MitigationTimeout() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `RequestsPerPeriod`<sup>Required</sup> <a name="RequestsPerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```go
func RequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `RequestsToOrigin`<sup>Required</sup> <a name="RequestsToOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```go
func RequestsToOrigin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScorePerPeriod`<sup>Required</sup> <a name="ScorePerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```go
func ScorePerPeriod() *f64
```

- *Type:* *f64

---

##### `ScoreResponseHeaderName`<sup>Required</sup> <a name="ScoreResponseHeaderName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```go
func ScoreResponseHeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareRulesetsRulesetsRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit">DataCloudflareRulesetsRulesetsRulesRatelimit</a>

---



