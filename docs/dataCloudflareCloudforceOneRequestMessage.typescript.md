# `dataCloudflareCloudforceOneRequestMessage` Submodule <a name="`dataCloudflareCloudforceOneRequestMessage` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestMessage <a name="DataCloudflareCloudforceOneRequestMessage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer"></a>

```typescript
import { dataCloudflareCloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

new dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestMessageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig">DataCloudflareCloudforceOneRequestMessageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig">DataCloudflareCloudforceOneRequestMessageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetAfter"></a>

```typescript
public resetAfter(): void
```

##### `resetBefore` <a name="resetBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetBefore"></a>

```typescript
public resetBefore(): void
```

##### `resetSortBy` <a name="resetSortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct"></a>

```typescript
import { dataCloudflareCloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement"></a>

```typescript
import { dataCloudflareCloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport"></a>

```typescript
import { dataCloudflareCloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestMessage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCloudforceOneRequestMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.isFollowOnRequest">isFollowOnRequest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.afterInput">afterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.beforeInput">beforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.pageInput">pageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPageInput">perPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestIdInput">requestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.after">after</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.before">before</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.page">page</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPage">perPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `isFollowOnRequest`<sup>Required</sup> <a name="isFollowOnRequest" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.isFollowOnRequest"></a>

```typescript
public readonly isFollowOnRequest: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.afterInput"></a>

```typescript
public readonly afterInput: string;
```

- *Type:* string

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.beforeInput"></a>

```typescript
public readonly beforeInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.pageInput"></a>

```typescript
public readonly pageInput: number;
```

- *Type:* number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPageInput"></a>

```typescript
public readonly perPageInput: number;
```

- *Type:* number

---

##### `requestIdInput`<sup>Optional</sup> <a name="requestIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestIdInput"></a>

```typescript
public readonly requestIdInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.after"></a>

```typescript
public readonly after: string;
```

- *Type:* string

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.before"></a>

```typescript
public readonly before: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestMessageConfig <a name="DataCloudflareCloudforceOneRequestMessageConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.Initializer"></a>

```typescript
import { dataCloudflareCloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

const dataCloudflareCloudforceOneRequestMessageConfig: dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.page">page</a></code> | <code>number</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.perPage">perPage</a></code> | <code>number</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.requestId">requestId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.after">after</a></code> | <code>string</code> | Retrieve mes  ges created after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.before">before</a></code> | <code>string</code> | Retrieve messages created before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Field to sort results by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Sort order (asc or desc). Available values: "asc", "desc". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#account_id DataCloudflareCloudforceOneRequestMessage#account_id}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#page DataCloudflareCloudforceOneRequestMessage#page}

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#per_page DataCloudflareCloudforceOneRequestMessage#per_page}

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#request_id DataCloudflareCloudforceOneRequestMessage#request_id}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.after"></a>

```typescript
public readonly after: string;
```

- *Type:* string

Retrieve mes  ges created after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#after DataCloudflareCloudforceOneRequestMessage#after}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.before"></a>

```typescript
public readonly before: string;
```

- *Type:* string

Retrieve messages created before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#before DataCloudflareCloudforceOneRequestMessage#before}

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Field to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#sort_by DataCloudflareCloudforceOneRequestMessage#sort_by}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestMessage.DataCloudflareCloudforceOneRequestMessageConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Sort order (asc or desc). Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/cloudforce_one_request_message#sort_order DataCloudflareCloudforceOneRequestMessage#sort_order}

---



