# `dataCloudflareZeroTrustGatewayLogging` Submodule <a name="`dataCloudflareZeroTrustGatewayLogging` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayLogging <a name="DataCloudflareZeroTrustGatewayLogging" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

datacloudflarezerotrustgatewaylogging.NewDataCloudflareZeroTrustGatewayLogging(scope Construct, id *string, config DataCloudflareZeroTrustGatewayLoggingConfig) DataCloudflareZeroTrustGatewayLogging
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig">DataCloudflareZeroTrustGatewayLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig">DataCloudflareZeroTrustGatewayLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

datacloudflarezerotrustgatewaylogging.DataCloudflareZeroTrustGatewayLogging_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

datacloudflarezerotrustgatewaylogging.DataCloudflareZeroTrustGatewayLogging_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

datacloudflarezerotrustgatewaylogging.DataCloudflareZeroTrustGatewayLogging_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

datacloudflarezerotrustgatewaylogging.DataCloudflareZeroTrustGatewayLogging_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustGatewayLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.redactPii">RedactPii</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference">DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.redactPii"></a>

```go
func RedactPii() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.settingsByRuleType"></a>

```go
func SettingsByRuleType() DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference">DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLogging.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayLoggingConfig <a name="DataCloudflareZeroTrustGatewayLoggingConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

&datacloudflarezerotrustgatewaylogging.DataCloudflareZeroTrustGatewayLoggingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_logging#account_id DataCloudflareZeroTrustGatewayLogging#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_logging#account_id DataCloudflareZeroTrustGatewayLogging#account_id}.

---

### DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType <a name="DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

&datacloudflarezerotrustgatewaylogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference <a name="DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustgatewaylogging"

datacloudflarezerotrustgatewaylogging.NewDataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType">DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```go
func Dns() *string
```

- *Type:* *string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```go
func Http() *string
```

- *Type:* *string

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```go
func L4() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayLogging.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType">DataCloudflareZeroTrustGatewayLoggingSettingsByRuleType</a>

---



