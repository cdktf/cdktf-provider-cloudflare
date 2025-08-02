# `dataCloudflareEmailRoutingDns` Submodule <a name="`dataCloudflareEmailRoutingDns` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailRoutingDns <a name="DataCloudflareEmailRoutingDns" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_dns cloudflare_email_routing_dns}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDns(scope Construct, id *string, config DataCloudflareEmailRoutingDnsConfig) DataCloudflareEmailRoutingDns
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig">DataCloudflareEmailRoutingDnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig">DataCloudflareEmailRoutingDnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.resetSubdomain">ResetSubdomain</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetSubdomain` <a name="ResetSubdomain" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.resetSubdomain"></a>

```go
func ResetSubdomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailRoutingDns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.DataCloudflareEmailRoutingDns_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.DataCloudflareEmailRoutingDns_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.DataCloudflareEmailRoutingDns_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.DataCloudflareEmailRoutingDns_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareEmailRoutingDns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareEmailRoutingDns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareEmailRoutingDns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_dns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailRoutingDns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList">DataCloudflareEmailRoutingDnsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList">DataCloudflareEmailRoutingDnsMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference">DataCloudflareEmailRoutingDnsResultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.resultInfo">ResultInfo</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference">DataCloudflareEmailRoutingDnsResultInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.success">Success</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.subdomainInput">SubdomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.errors"></a>

```go
func Errors() DataCloudflareEmailRoutingDnsErrorsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList">DataCloudflareEmailRoutingDnsErrorsList</a>

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.messages"></a>

```go
func Messages() DataCloudflareEmailRoutingDnsMessagesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList">DataCloudflareEmailRoutingDnsMessagesList</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.result"></a>

```go
func Result() DataCloudflareEmailRoutingDnsResultOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference">DataCloudflareEmailRoutingDnsResultOutputReference</a>

---

##### `ResultInfo`<sup>Required</sup> <a name="ResultInfo" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.resultInfo"></a>

```go
func ResultInfo() DataCloudflareEmailRoutingDnsResultInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference">DataCloudflareEmailRoutingDnsResultInfoOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.success"></a>

```go
func Success() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SubdomainInput`<sup>Optional</sup> <a name="SubdomainInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.subdomainInput"></a>

```go
func SubdomainInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDns.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailRoutingDnsConfig <a name="DataCloudflareEmailRoutingDnsConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Subdomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.subdomain">Subdomain</a></code> | <code>*string</code> | Domain of your zone. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_dns#zone_id DataCloudflareEmailRoutingDns#zone_id}

---

##### `Subdomain`<sup>Optional</sup> <a name="Subdomain" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsConfig.property.subdomain"></a>

```go
Subdomain *string
```

- *Type:* *string

Domain of your zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_dns#subdomain DataCloudflareEmailRoutingDns#subdomain}

---

### DataCloudflareEmailRoutingDnsErrors <a name="DataCloudflareEmailRoutingDnsErrors" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsErrors {

}
```


### DataCloudflareEmailRoutingDnsErrorsSource <a name="DataCloudflareEmailRoutingDnsErrorsSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsErrorsSource {

}
```


### DataCloudflareEmailRoutingDnsMessages <a name="DataCloudflareEmailRoutingDnsMessages" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsMessages {

}
```


### DataCloudflareEmailRoutingDnsMessagesSource <a name="DataCloudflareEmailRoutingDnsMessagesSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsMessagesSource {

}
```


### DataCloudflareEmailRoutingDnsResult <a name="DataCloudflareEmailRoutingDnsResult" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsResult {

}
```


### DataCloudflareEmailRoutingDnsResultErrors <a name="DataCloudflareEmailRoutingDnsResultErrors" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsResultErrors {

}
```


### DataCloudflareEmailRoutingDnsResultErrorsMissing <a name="DataCloudflareEmailRoutingDnsResultErrorsMissing" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsResultErrorsMissing {

}
```


### DataCloudflareEmailRoutingDnsResultInfo <a name="DataCloudflareEmailRoutingDnsResultInfo" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsResultInfo {

}
```


### DataCloudflareEmailRoutingDnsResultRecord <a name="DataCloudflareEmailRoutingDnsResultRecord" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

&datacloudflareemailroutingdns.DataCloudflareEmailRoutingDnsResultRecord {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailRoutingDnsErrorsList <a name="DataCloudflareEmailRoutingDnsErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailRoutingDnsErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailRoutingDnsErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailRoutingDnsErrorsOutputReference <a name="DataCloudflareEmailRoutingDnsErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailRoutingDnsErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.documentationUrl">DocumentationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference">DataCloudflareEmailRoutingDnsErrorsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrors">DataCloudflareEmailRoutingDnsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `DocumentationUrl`<sup>Required</sup> <a name="DocumentationUrl" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.documentationUrl"></a>

```go
func DocumentationUrl() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.source"></a>

```go
func Source() DataCloudflareEmailRoutingDnsErrorsSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference">DataCloudflareEmailRoutingDnsErrorsSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsErrors
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrors">DataCloudflareEmailRoutingDnsErrors</a>

---


### DataCloudflareEmailRoutingDnsErrorsSourceOutputReference <a name="DataCloudflareEmailRoutingDnsErrorsSourceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsErrorsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailRoutingDnsErrorsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.pointer">Pointer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSource">DataCloudflareEmailRoutingDnsErrorsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pointer`<sup>Required</sup> <a name="Pointer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.pointer"></a>

```go
func Pointer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsErrorsSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsErrorsSource">DataCloudflareEmailRoutingDnsErrorsSource</a>

---


### DataCloudflareEmailRoutingDnsMessagesList <a name="DataCloudflareEmailRoutingDnsMessagesList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailRoutingDnsMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailRoutingDnsMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailRoutingDnsMessagesOutputReference <a name="DataCloudflareEmailRoutingDnsMessagesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailRoutingDnsMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.documentationUrl">DocumentationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference">DataCloudflareEmailRoutingDnsMessagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessages">DataCloudflareEmailRoutingDnsMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `DocumentationUrl`<sup>Required</sup> <a name="DocumentationUrl" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.documentationUrl"></a>

```go
func DocumentationUrl() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.source"></a>

```go
func Source() DataCloudflareEmailRoutingDnsMessagesSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference">DataCloudflareEmailRoutingDnsMessagesSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsMessages
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessages">DataCloudflareEmailRoutingDnsMessages</a>

---


### DataCloudflareEmailRoutingDnsMessagesSourceOutputReference <a name="DataCloudflareEmailRoutingDnsMessagesSourceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsMessagesSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailRoutingDnsMessagesSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.pointer">Pointer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSource">DataCloudflareEmailRoutingDnsMessagesSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pointer`<sup>Required</sup> <a name="Pointer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.pointer"></a>

```go
func Pointer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsMessagesSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsMessagesSource">DataCloudflareEmailRoutingDnsMessagesSource</a>

---


### DataCloudflareEmailRoutingDnsResultErrorsList <a name="DataCloudflareEmailRoutingDnsResultErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailRoutingDnsResultErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailRoutingDnsResultErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference <a name="DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissing">DataCloudflareEmailRoutingDnsResultErrorsMissing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsResultErrorsMissing
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissing">DataCloudflareEmailRoutingDnsResultErrorsMissing</a>

---


### DataCloudflareEmailRoutingDnsResultErrorsOutputReference <a name="DataCloudflareEmailRoutingDnsResultErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailRoutingDnsResultErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.missing">Missing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference">DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrors">DataCloudflareEmailRoutingDnsResultErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Missing`<sup>Required</sup> <a name="Missing" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.missing"></a>

```go
func Missing() DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference">DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsResultErrors
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrors">DataCloudflareEmailRoutingDnsResultErrors</a>

---


### DataCloudflareEmailRoutingDnsResultInfoOutputReference <a name="DataCloudflareEmailRoutingDnsResultInfoOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailRoutingDnsResultInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.page">Page</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.perPage">PerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.totalCount">TotalCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfo">DataCloudflareEmailRoutingDnsResultInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.page"></a>

```go
func Page() *f64
```

- *Type:* *f64

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.perPage"></a>

```go
func PerPage() *f64
```

- *Type:* *f64

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.totalCount"></a>

```go
func TotalCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsResultInfo
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultInfo">DataCloudflareEmailRoutingDnsResultInfo</a>

---


### DataCloudflareEmailRoutingDnsResultOutputReference <a name="DataCloudflareEmailRoutingDnsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailRoutingDnsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList">DataCloudflareEmailRoutingDnsResultErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.record">Record</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList">DataCloudflareEmailRoutingDnsResultRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResult">DataCloudflareEmailRoutingDnsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.errors"></a>

```go
func Errors() DataCloudflareEmailRoutingDnsResultErrorsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultErrorsList">DataCloudflareEmailRoutingDnsResultErrorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Record`<sup>Required</sup> <a name="Record" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.record"></a>

```go
func Record() DataCloudflareEmailRoutingDnsResultRecordList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList">DataCloudflareEmailRoutingDnsResultRecordList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResult">DataCloudflareEmailRoutingDnsResult</a>

---


### DataCloudflareEmailRoutingDnsResultRecordList <a name="DataCloudflareEmailRoutingDnsResultRecordList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultRecordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailRoutingDnsResultRecordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailRoutingDnsResultRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailRoutingDnsResultRecordOutputReference <a name="DataCloudflareEmailRoutingDnsResultRecordOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareemailroutingdns"

datacloudflareemailroutingdns.NewDataCloudflareEmailRoutingDnsResultRecordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailRoutingDnsResultRecordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecord">DataCloudflareEmailRoutingDnsResultRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailRoutingDnsResultRecord
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingDns.DataCloudflareEmailRoutingDnsResultRecord">DataCloudflareEmailRoutingDnsResultRecord</a>

---



