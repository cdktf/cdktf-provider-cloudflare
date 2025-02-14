# `dnsSettings` Submodule <a name="`dnsSettings` Submodule" id="@cdktf/provider-cloudflare.dnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSettings <a name="DnsSettings" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings cloudflare_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.NewDnsSettings(scope Construct, id *string, config DnsSettingsConfig) DnsSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig">DnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig">DnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults">PutZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults">ResetZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutZoneDefaults` <a name="PutZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults"></a>

```go
func PutZoneDefaults(value DnsSettingsZoneDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetZoneDefaults` <a name="ResetZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults"></a>

```go
func ResetZoneDefaults()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.DnsSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.DnsSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.DnsSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.DnsSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput">ZoneDefaultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneDefaults`<sup>Required</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults"></a>

```go
func ZoneDefaults() DnsSettingsZoneDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ZoneDefaultsInput`<sup>Optional</sup> <a name="ZoneDefaultsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput"></a>

```go
func ZoneDefaultsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSettingsConfig <a name="DnsSettingsConfig" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

&dnssettings.DnsSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ZoneDefaults: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dnsSettings.DnsSettingsZoneDefaults,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}

---

##### `ZoneDefaults`<sup>Optional</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults"></a>

```go
ZoneDefaults DnsSettingsZoneDefaults
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}

---

### DnsSettingsZoneDefaults <a name="DnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

&dnssettings.DnsSettingsZoneDefaults {
	FlattenAllCnames: interface{},
	FoundationDns: interface{},
	InternalDns: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns,
	MultiProvider: interface{},
	Nameservers: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers,
	NsTtl: *f64,
	SecondaryOverrides: interface{},
	Soa: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa,
	ZoneMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>interface{}</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns">FoundationDns</a></code> | <code>interface{}</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider">MultiProvider</a></code> | <code>interface{}</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>interface{}</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | Whether the zone mode is a regular or CDN/DNS only zone. |

---

##### `FlattenAllCnames`<sup>Optional</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```go
FlattenAllCnames interface{}
```

- *Type:* interface{}

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#flatten_all_cnames DnsSettings#flatten_all_cnames}

---

##### `FoundationDns`<sup>Optional</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns"></a>

```go
FoundationDns interface{}
```

- *Type:* interface{}

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#foundation_dns DnsSettings#foundation_dns}

---

##### `InternalDns`<sup>Optional</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns"></a>

```go
InternalDns DnsSettingsZoneDefaultsInternalDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#internal_dns DnsSettings#internal_dns}

---

##### `MultiProvider`<sup>Optional</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider"></a>

```go
MultiProvider interface{}
```

- *Type:* interface{}

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#multi_provider DnsSettings#multi_provider}

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers"></a>

```go
Nameservers DnsSettingsZoneDefaultsNameservers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#nameservers DnsSettings#nameservers}

---

##### `NsTtl`<sup>Optional</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl"></a>

```go
NsTtl *f64
```

- *Type:* *f64

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ns_ttl DnsSettings#ns_ttl}

---

##### `SecondaryOverrides`<sup>Optional</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```go
SecondaryOverrides interface{}
```

- *Type:* interface{}

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#secondary_overrides DnsSettings#secondary_overrides}

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa"></a>

```go
Soa DnsSettingsZoneDefaultsSoa
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#soa DnsSettings#soa}

---

##### `ZoneMode`<sup>Optional</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode"></a>

```go
ZoneMode *string
```

- *Type:* *string

Whether the zone mode is a regular or CDN/DNS only zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_mode DnsSettings#zone_mode}

---

### DnsSettingsZoneDefaultsInternalDns <a name="DnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

&dnssettings.DnsSettingsZoneDefaultsInternalDns {
	ReferenceZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | The ID of the zone to fallback to. |

---

##### `ReferenceZoneId`<sup>Optional</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```go
ReferenceZoneId *string
```

- *Type:* *string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#reference_zone_id DnsSettings#reference_zone_id}

---

### DnsSettingsZoneDefaultsNameservers <a name="DnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

&dnssettings.DnsSettingsZoneDefaultsNameservers {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type">Type</a></code> | <code>*string</code> | Nameserver type. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type"></a>

```go
Type *string
```

- *Type:* *string

Nameserver type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#type DnsSettings#type}

---

### DnsSettingsZoneDefaultsSoa <a name="DnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

&dnssettings.DnsSettingsZoneDefaultsSoa {
	Expire: *f64,
	MinTtl: *f64,
	Mname: *string,
	Refresh: *f64,
	Retry: *f64,
	Rname: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire">Expire</a></code> | <code>*f64</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl">MinTtl</a></code> | <code>*f64</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname">Mname</a></code> | <code>*string</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh">Refresh</a></code> | <code>*f64</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry">Retry</a></code> | <code>*f64</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname">Rname</a></code> | <code>*string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl">Ttl</a></code> | <code>*f64</code> | The time to live (TTL) of the SOA record itself. |

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire"></a>

```go
Expire *f64
```

- *Type:* *f64

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#expire DnsSettings#expire}

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```go
MinTtl *f64
```

- *Type:* *f64

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#min_ttl DnsSettings#min_ttl}

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname"></a>

```go
Mname *string
```

- *Type:* *string

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#mname DnsSettings#mname}

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh"></a>

```go
Refresh *f64
```

- *Type:* *f64

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#refresh DnsSettings#refresh}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry"></a>

```go
Retry *f64
```

- *Type:* *f64

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#retry DnsSettings#retry}

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname"></a>

```go
Rname *string
```

- *Type:* *string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#rname DnsSettings#rname}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ttl DnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSettingsZoneDefaultsInternalDnsOutputReference <a name="DnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.NewDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsSettingsZoneDefaultsInternalDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">ResetReferenceZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceZoneId` <a name="ResetReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```go
func ResetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">ReferenceZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceZoneIdInput`<sup>Optional</sup> <a name="ReferenceZoneIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```go
func ReferenceZoneIdInput() *string
```

- *Type:* *string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```go
func ReferenceZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSettingsZoneDefaultsNameserversOutputReference <a name="DnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.NewDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsSettingsZoneDefaultsNameserversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSettingsZoneDefaultsOutputReference <a name="DnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.NewDnsSettingsZoneDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsSettingsZoneDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns">PutInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers">PutNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">ResetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns">ResetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns">ResetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider">ResetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl">ResetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">ResetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa">ResetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode">ResetZoneMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalDns` <a name="PutInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```go
func PutInternalDns(value DnsSettingsZoneDefaultsInternalDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

---

##### `PutNameservers` <a name="PutNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```go
func PutNameservers(value DnsSettingsZoneDefaultsNameservers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

---

##### `PutSoa` <a name="PutSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```go
func PutSoa(value DnsSettingsZoneDefaultsSoa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

---

##### `ResetFlattenAllCnames` <a name="ResetFlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```go
func ResetFlattenAllCnames()
```

##### `ResetFoundationDns` <a name="ResetFoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```go
func ResetFoundationDns()
```

##### `ResetInternalDns` <a name="ResetInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```go
func ResetInternalDns()
```

##### `ResetMultiProvider` <a name="ResetMultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```go
func ResetMultiProvider()
```

##### `ResetNameservers` <a name="ResetNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```go
func ResetNameservers()
```

##### `ResetNsTtl` <a name="ResetNsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```go
func ResetNsTtl()
```

##### `ResetSecondaryOverrides` <a name="ResetSecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```go
func ResetSecondaryOverrides()
```

##### `ResetSoa` <a name="ResetSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```go
func ResetSoa()
```

##### `ResetZoneMode` <a name="ResetZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```go
func ResetZoneMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">FlattenAllCnamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">FoundationDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">InternalDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">MultiProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">NsTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">SecondaryOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput">SoaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">ZoneModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns">FoundationDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider">MultiProvider</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```go
func InternalDns() DnsSettingsZoneDefaultsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```go
func Nameservers() DnsSettingsZoneDefaultsNameserversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```go
func Soa() DnsSettingsZoneDefaultsSoaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `FlattenAllCnamesInput`<sup>Optional</sup> <a name="FlattenAllCnamesInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```go
func FlattenAllCnamesInput() interface{}
```

- *Type:* interface{}

---

##### `FoundationDnsInput`<sup>Optional</sup> <a name="FoundationDnsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```go
func FoundationDnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalDnsInput`<sup>Optional</sup> <a name="InternalDnsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```go
func InternalDnsInput() interface{}
```

- *Type:* interface{}

---

##### `MultiProviderInput`<sup>Optional</sup> <a name="MultiProviderInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```go
func MultiProviderInput() interface{}
```

- *Type:* interface{}

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```go
func NameserversInput() interface{}
```

- *Type:* interface{}

---

##### `NsTtlInput`<sup>Optional</sup> <a name="NsTtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```go
func NsTtlInput() *f64
```

- *Type:* *f64

---

##### `SecondaryOverridesInput`<sup>Optional</sup> <a name="SecondaryOverridesInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```go
func SecondaryOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```go
func SoaInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneModeInput`<sup>Optional</sup> <a name="ZoneModeInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```go
func ZoneModeInput() *string
```

- *Type:* *string

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```go
func FlattenAllCnames() interface{}
```

- *Type:* interface{}

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```go
func FoundationDns() interface{}
```

- *Type:* interface{}

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```go
func MultiProvider() interface{}
```

- *Type:* interface{}

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```go
func NsTtl() *f64
```

- *Type:* *f64

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```go
func SecondaryOverrides() interface{}
```

- *Type:* interface{}

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```go
func ZoneMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSettingsZoneDefaultsSoaOutputReference <a name="DnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnssettings"

dnssettings.NewDnsSettingsZoneDefaultsSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsSettingsZoneDefaultsSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">ExpireInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">MnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">RefreshInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">RetryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">RnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire">Expire</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname">Mname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh">Refresh</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry">Retry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname">Rname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireInput`<sup>Optional</sup> <a name="ExpireInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```go
func ExpireInput() *f64
```

- *Type:* *f64

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```go
func MinTtlInput() *f64
```

- *Type:* *f64

---

##### `MnameInput`<sup>Optional</sup> <a name="MnameInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```go
func MnameInput() *string
```

- *Type:* *string

---

##### `RefreshInput`<sup>Optional</sup> <a name="RefreshInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```go
func RefreshInput() *f64
```

- *Type:* *f64

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```go
func RetryInput() *f64
```

- *Type:* *f64

---

##### `RnameInput`<sup>Optional</sup> <a name="RnameInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```go
func RnameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```go
func Expire() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```go
func Mname() *string
```

- *Type:* *string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```go
func Refresh() *f64
```

- *Type:* *f64

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```go
func Retry() *f64
```

- *Type:* *f64

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```go
func Rname() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



